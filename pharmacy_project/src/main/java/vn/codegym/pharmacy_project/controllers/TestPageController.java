package vn.codegym.pharmacy_project.controllers;


import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Transactional
public class TestPageController {

    @GetMapping("/")
    public String homePage(){
        return "homepage";
    }

    @GetMapping("/customer-page/cart")
    public String customerCart(){
        return "customer cart page";
    }

    @GetMapping("/customer-page")
    public String customerPage(){
        return "customer page";
    }

    @GetMapping("/employee-page")
    public String employeePage(){
        return "employeePage";
    }

    @GetMapping("/manager-page")
    public String managerPage(){
        return "managerPage";
    }
}
