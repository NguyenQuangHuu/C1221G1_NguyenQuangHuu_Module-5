package vn.codegym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.model.CoachStation;

public interface ICoachStationRepository extends JpaRepository<CoachStation,Integer> {
}
