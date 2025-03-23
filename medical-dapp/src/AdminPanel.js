import React, { useState } from 'react';
import { ethers } from 'ethers'; // Import ethers directly
import './AdminPanel.css';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    facilityName: '', block: '', department: '', ashaName: '', staffCode: '',
    isBooked: false, ipdRegNo: '', aadhaarNo: '', referral: '', patientName: '',
    age: '', sex: '', address: '', relation: '', contactNo: '', admissionDate: '',
    pregnancyStatus: '', admissionCategory: '', provisionalDiagnosis: '',
    finalDiagnosis: '', medicalHistory: '', bloodGroup: '', clinicalTestData: '',
    specimenDetails: '', plateletCount: ''
  });
  const [doctorAddress, setDoctorAddress] = useState('');
  const [patientAddress, setPatientAddress] = useState('');

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum); // Use BrowserProvider
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const facility = [
        formData.facilityName, formData.block, formData.department, formData.ashaName,
        formData.staffCode, formData.isBooked, formData.ipdRegNo, formData.aadhaarNo,
        formData.referral
      ];

      const patient = [
        formData.patientName, Number(formData.age), formData.sex, formData.address,
        formData.relation, formData.contactNo, formData.admissionDate, formData.pregnancyStatus,
        formData.admissionCategory, formData.provisionalDiagnosis, formData.finalDiagnosis,
        formData.medicalHistory, formData.bloodGroup, formData.clinicalTestData,
        formData.specimenDetails, Number(formData.plateletCount)
      ];

      const tx = await contract.addRecord(facility, patient);
      await tx.wait();
      alert('Record added successfully!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const addDoctor = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.addDoctor(doctorAddress);
      await tx.wait();
      alert('Doctor added successfully!');
      setDoctorAddress('');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const registerPatient = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.registerPatient(formData.aadhaarNo, patientAddress);
      await tx.wait();
      alert('Patient registered successfully!');
      setPatientAddress('');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <section>
        <h2>Add Medical Record</h2>
        <form onSubmit={handleSubmit}>
          <h3>Facility Details</h3>
          <input name="facilityName" placeholder="Facility Name" onChange={handleChange} required />
          <input name="block" placeholder="Block" onChange={handleChange} required />
          <input name="department" placeholder="Department" onChange={handleChange} required />
          <input name="ashaName" placeholder="ASHA Name" onChange={handleChange} required />
          <input name="staffCode" placeholder="Staff Code" onChange={handleChange} required />
          <label>
            Booked: <input type="checkbox" name="isBooked" onChange={handleChange} />
          </label>
          <input name="ipdRegNo" placeholder="IPD Reg No" onChange={handleChange} />
          <input name="aadhaarNo" placeholder="Aadhaar No" onChange={handleChange} required />
          <input name="referral" placeholder="Referral" onChange={handleChange} />

          <h3>Patient Details</h3>
          <input name="patientName" placeholder="Patient Name" onChange={handleChange} required />
          <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
          <select name="sex" onChange={handleChange} required>
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input name="address" placeholder="Address" onChange={handleChange} required />
          <input name="relation" placeholder="W/O or D/O" onChange={handleChange} required />
          <input name="contactNo" placeholder="Contact No" onChange={handleChange} required />
          <input name="admissionDate" type="date" onChange={handleChange} required />
          <select name="pregnancyStatus" onChange={handleChange}>
            <option value="">Pregnancy Status</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Infertile">Infertile</option>
          </select>
          <select name="admissionCategory" onChange={handleChange} required>
            <option value="">Admission Category</option>
            <option value="Emergency">Emergency</option>
            <option value="Routine">Routine</option>
            <option value="Surgical">Surgical</option>
          </select>
          <input name="provisionalDiagnosis" placeholder="Provisional Diagnosis" onChange={handleChange} />
          <input name="finalDiagnosis" placeholder="Final Diagnosis" onChange={handleChange} />
          <textarea name="medicalHistory" placeholder="Medical History (e.g., Diabetes)" onChange={handleChange} />
          <select name="bloodGroup" onChange={handleChange} required>
            <option value="">Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
          <textarea name="clinicalTestData" placeholder="Clinical Test Data (e.g., CBC)" onChange={handleChange} />
          <input name="specimenDetails" placeholder="Specimen Details" onChange={handleChange} />
          <input name="plateletCount" type="number" placeholder="Platelet Count" onChange={handleChange} required />
          <button type="submit">Add Record</button>
        </form>
      </section>

      <section>
        <h2>Authorize Doctor</h2>
        <input
          placeholder="Doctor Address"
          value={doctorAddress}
          onChange={(e) => setDoctorAddress(e.target.value)}
        />
        <button onClick={addDoctor}>Add Doctor</button>
      </section>

      <section>
        <h2>Register Patient</h2>
        <input
          placeholder="Patient Address"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
        />
        <button onClick={registerPatient}>Register Patient</button>
      </section>
    </div>
  );
};

export default AdminPanel;