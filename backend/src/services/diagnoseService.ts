import diagnoseData from '../../data/diagnoses.json';

import { Diagnose } from '../types/types';

const diagnoses: Array<Diagnose> = diagnoseData;

const getDiagnoses = (): Array<Diagnose> => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
