package vn.codegym.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.codegym.model.CoachStation;

import java.util.List;

public interface ICoachStationService {
    List<CoachStation> getAll();
}
