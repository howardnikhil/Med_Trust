import React, { useState } from 'react';
import { ethers } from 'ethers'; 
import './Viewer.css';

const Viewer = () => {
  const [recordId, setRecordId] = useState('');
  const [record, setRecord] = useState(null);

  const contractAddress = '0x79441Ba08c1e6763351984df7fd707a868333f22'; 
  const abi = [[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_doctor",
          "type": "address"
        }
      ],
      "name": "addDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "facilityName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "block",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "department",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ashaName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "staffCode",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isBooked",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "ipdRegNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "aadhaarNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "referral",
              "type": "string"
            }
          ],
          "internalType": "struct MedicalRecordSystem.FacilityDetails",
          "name": "_facility",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "patientName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "sex",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "address_",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "relation",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "admissionDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "pregnancyStatus",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "admissionCategory",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "provisionalDiagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "finalDiagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "medicalHistory",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "bloodGroup",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "clinicalTestData",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "specimenDetails",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "plateletCount",
              "type": "uint256"
            }
          ],
          "internalType": "struct MedicalRecordSystem.PatientDetails",
          "name": "_patient",
          "type": "tuple"
        }
      ],
      "name": "addRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "authorizedDoctors",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "patientToAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "recordCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "records",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "facilityName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "block",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "department",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ashaName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "staffCode",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isBooked",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "ipdRegNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "aadhaarNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "referral",
              "type": "string"
            }
          ],
          "internalType": "struct MedicalRecordSystem.FacilityDetails",
          "name": "facility",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "patientName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "sex",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "address_",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "relation",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "admissionDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "pregnancyStatus",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "admissionCategory",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "provisionalDiagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "finalDiagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "medicalHistory",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "bloodGroup",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "clinicalTestData",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "specimenDetails",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "plateletCount",
              "type": "uint256"
            }
          ],
          "internalType": "struct MedicalRecordSystem.PatientDetails",
          "name": "patient",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_aadhaarNo",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        }
      ],
      "name": "registerPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_recordId",
          "type": "uint256"
        }
      ],
      "name": "viewRecord",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "facilityName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "block",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "department",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ashaName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "staffCode",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isBooked",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "ipdRegNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "aadhaarNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "referral",
              "type": "string"
            }
          ],
          "internalType": "struct MedicalRecordSystem.FacilityDetails",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "patientName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "sex",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "address_",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "relation",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "admissionDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "pregnancyStatus",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "admissionCategory",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "provisionalDiagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "finalDiagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "medicalHistory",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "bloodGroup",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "clinicalTestData",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "specimenDetails",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "plateletCount",
              "type": "uint256"
            }
          ],
          "internalType": "struct MedicalRecordSystem.PatientDetails",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]];

  const handleView = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum); // Use BrowserProvider
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const [facility, patient] = await contract.viewRecord(recordId);
      setRecord({ facility, patient });
    } catch (error) {
      alert('Error: ' + error.message);
      setRecord(null);
    }
  };

  return (
    <div className="viewer">
      <h1>Record Viewer</h1>
      <div className="input-group">
        <input
          type="number"
          placeholder="Enter Record ID"
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
        />
        <button onClick={handleView}>View Record</button>
      </div>

      {record && (
        <div className="record-details">
          <h2>Facility Details</h2>
          <p><strong>Facility Name:</strong> {record.facility.facilityName}</p>
          <p><strong>Block:</strong> {record.facility.block}</p>
          <p><strong>Department:</strong> {record.facility.department}</p>
          <p><strong>ASHA Name:</strong> {record.facility.ashaName}</p>
          <p><strong>Staff Code:</strong> {record.facility.staffCode}</p>
          <p><strong>Booked:</strong> {record.facility.isBooked ? 'Yes' : 'No'}</p>
          <p><strong>IPD Reg No:</strong> {record.facility.ipdRegNo}</p>
          <p><strong>Aadhaar No:</strong> {record.facility.aadhaarNo}</p>
          <p><strong>Referral:</strong> {record.facility.referral}</p>

          <h2>Patient Details</h2>
          <p><strong>Name:</strong> {record.patient.patientName}</p>
          <p><strong>Age:</strong> {record.patient.age.toString()}</p>
          <p><strong>Sex:</strong> {record.patient.sex}</p>
          <p><strong>Address:</strong> {record.patient.address_}</p>
          <p><strong>Relation:</strong> {record.patient.relation}</p>
          <p><strong>Contact No:</strong> {record.patient.contactNo}</p>
          <p><strong>Admission Date:</strong> {record.patient.admissionDate}</p>
          <p><strong>Pregnancy Status:</strong> {record.patient.pregnancyStatus || 'N/A'}</p>
          <p><strong>Admission Category:</strong> {record.patient.admissionCategory}</p>
          <p><strong>Provisional Diagnosis:</strong> {record.patient.provisionalDiagnosis || 'N/A'}</p>
          <p><strong>Final Diagnosis:</strong> {record.patient.finalDiagnosis || 'N/A'}</p>
          <p><strong>Medical History:</strong> {record.patient.medicalHistory || 'N/A'}</p>
          <p><strong>Blood Group:</strong> {record.patient.bloodGroup}</p>
          <p><strong>Clinical Test Data:</strong> {record.patient.clinicalTestData || 'N/A'}</p>
          <p><strong>Specimen Details:</strong> {record.patient.specimenDetails || 'N/A'}</p>
          <p><strong>Platelet Count:</strong> {record.patient.plateletCount.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default Viewer;