package com.HospitalManagementSystem.DoctorService.repositories;

import com.HospitalManagementSystem.DoctorService.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {

}
