// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MedicalRecordSystem {
    address public admin;

    struct FacilityDetails {
        string facilityName;
        string block;
        string department;
        string ashaName;
        string staffCode;
        bool isBooked; // For new patient
        string ipdRegNo; // For old patient
        string aadhaarNo;
        string referral;
    }

    struct PatientDetails {
        string patientName;
        uint256 age;
        string sex;
        string address_;
        string relation; // W/O or D/O
        string contactNo;
        string admissionDate;
        string pregnancyStatus; // Yes/No/Infertile
        string admissionCategory;
        string provisionalDiagnosis;
        string finalDiagnosis;
        string medicalHistory;
        string bloodGroup;
        string clinicalTestData;
        string specimenDetails;
        uint256 plateletCount;
    }

    struct MedicalRecord {
        FacilityDetails facility;
        PatientDetails patient;
    }

    mapping(uint256 => MedicalRecord) public records;
    mapping(address => bool) public authorizedDoctors;
    mapping(string => address) public patientToAddress; // Aadhaar to patient address
    uint256 public recordCount;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyAuthorized(uint256 _recordId) {
        require(
            msg.sender == admin || 
            authorizedDoctors[msg.sender] || 
            patientToAddress[records[_recordId].facility.aadhaarNo] == msg.sender, 
            "Not authorized"
        );
        _;
    }

    constructor() {
        admin = msg.sender; // Deployer is the admin
    }

    function addDoctor(address _doctor) external onlyAdmin {
        authorizedDoctors[_doctor] = true;
    }

    function registerPatient(string memory _aadhaarNo, address _patientAddress) external onlyAdmin {
        patientToAddress[_aadhaarNo] = _patientAddress;
    }

    function addRecord(
        FacilityDetails memory _facility,
        PatientDetails memory _patient
    ) external onlyAdmin {
        recordCount++;
        records[recordCount] = MedicalRecord(_facility, _patient);
    }

    function viewRecord(uint256 _recordId) 
        external 
        view 
        onlyAuthorized(_recordId) 
        returns (FacilityDetails memory, PatientDetails memory) 
    {
        MedicalRecord memory record = records[_recordId];
        return (record.facility, record.patient);
    }
}
