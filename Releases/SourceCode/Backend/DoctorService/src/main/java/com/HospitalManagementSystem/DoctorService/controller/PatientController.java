package com.HospitalManagementSystem.DoctorService.controller;

import com.HospitalManagementSystem.DoctorService.model.Patient;
import com.HospitalManagementSystem.DoctorService.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(value = "/")
    public String saveUser(@RequestBody Patient patient) {

        patientRepository.save(patient);
        return "Added User successfully. NIC number is: " + patient.getNic();
    }


}
