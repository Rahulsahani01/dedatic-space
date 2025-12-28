import React from 'react';
import WorkingProcessCard from './ui/WorkingProcessCard';
import { workingProccess } from '../data';
import SectionHeading from './ui/SectionHeading';

const WorkingProcess = () => {
  return (
    <section className="mx-auto container px-6">
      <div className="heading mb-10">
        <SectionHeading
          text="A Step-by-Step Approach to Building Reliable Digital Solutions"
          heading="Our Working Process"
        />
      </div>

      <div>
        {workingProccess.map((proccess) => {
          return (
            <WorkingProcessCard
              text={proccess.text}
              title={proccess.title}
              id={proccess.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess;
