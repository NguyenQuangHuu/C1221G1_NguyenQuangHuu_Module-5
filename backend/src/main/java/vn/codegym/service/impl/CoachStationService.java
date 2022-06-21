package vn.codegym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.codegym.model.CoachStation;
import vn.codegym.repository.ICoachStationRepository;
import vn.codegym.service.ICoachStationService;

import java.util.List;

@Service
public class CoachStationService implements ICoachStationService {
    @Autowired
    private ICoachStationRepository iCoachStationRepository;

    @Override
    public List<CoachStation> getAll() {
        return this.iCoachStationRepository.findAll();
    }
}
