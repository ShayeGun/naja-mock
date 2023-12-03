import { Router } from "express";
import DrivingLicense from '../../mocks/driving-license.json';
import DrivingLicenseSaved from '../../mocks/driving-license-saved.json';
import NegativePoints from '../../mocks/negative-points.json';
import LicensePlate from '../../mocks/license-plates.json';
import LicensePlateSaved from '../../mocks/license-plates-saved.json';
import PlateDoc from '../../mocks/plate-doc.json';
import Violations from '../../mocks/violations.json';
import ViolationImage from '../../mocks/violation-image.json';
import Passport from '../../mocks/passport.json';




const router = Router();

router.route('/test')
    .get((req, res) => {
        res.json({
            data: 'test'
        });
    });

router.route('/driving-licenses')
    .post((req, res) => {
        res.json(DrivingLicense);
    });

router.route('/driving-licenses/saved')
    .get((req, res) => {
        res.json(DrivingLicenseSaved);
    });

router.route('/negative-pointes')
    .post((req, res) => {
        res.json(NegativePoints);
    });

router.route('/license-plates')
    .post((req, res) => {
        res.json(LicensePlate);
    });

router.route('/license-plates/saved')
    .get((req, res) => {
        res.json(LicensePlateSaved);
    });

router.route('/violations')
    .post((req, res) => {
        res.json(Violations);
    });

router.route('/violations/image')
    .post((req, res) => {
        res.json(ViolationImage);
    });

router.route('/document')
    .post((req, res) => {
        res.json(PlateDoc);
    });

router.route('/passport')
    .post((req, res) => {
        res.json(Passport);
    });

export { router as mainRouter };