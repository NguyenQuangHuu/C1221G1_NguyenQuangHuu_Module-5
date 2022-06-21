package vn.codegym.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String numberPlate;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "type",referencedColumnName = "id")
    private VehicleType types;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "coach_station",referencedColumnName = "id")
    private CoachStation coachStation;
    private String startSpot;
    private String stopSpot;
    private String phoneNumber;
    private String email;
    @Column(columnDefinition = "TIME")
    private String startTime;
    @Column(columnDefinition = "TIME")
    private String stopTime;

    public Vehicle() {
    }

    public Vehicle(String numberPlate, VehicleType types, CoachStation coachStation, String startSpot, String stopSpot, String phoneNumber, String email, String startTime, String stopTime) {
        this.numberPlate = numberPlate;
        this.types = types;
        this.coachStation = coachStation;
        this.startSpot = startSpot;
        this.stopSpot = stopSpot;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.startTime = startTime;
        this.stopTime = stopTime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberPlate() {
        return numberPlate;
    }

    public void setNumberPlate(String numberPlate) {
        this.numberPlate = numberPlate;
    }

    public VehicleType getTypes() {
        return types;
    }

    public void setTypes(VehicleType types) {
        this.types = types;
    }

    public CoachStation getCoachStation() {
        return coachStation;
    }

    public void setCoachStation(CoachStation coachStation) {
        this.coachStation = coachStation;
    }

    public String getStartSpot() {
        return startSpot;
    }

    public void setStartSpot(String startSpot) {
        this.startSpot = startSpot;
    }

    public String getStopSpot() {
        return stopSpot;
    }

    public void setStopSpot(String stopSpot) {
        this.stopSpot = stopSpot;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getStopTime() {
        return stopTime;
    }

    public void setStopTime(String stopTime) {
        this.stopTime = stopTime;
    }
}
