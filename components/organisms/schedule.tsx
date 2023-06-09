import Title from "../atoms/title";
import { Tab } from '@headlessui/react';
import classNames from 'classnames';


const Schedule = () => {




    const eventsInterview = ['Interview 1', 'Interview 2']
    const eventsDeadline = ['Deadline 1', 'Deadline 2']
    const eventsEvent = ['Event 1', 'Event 2']
    const eventsAll = [...eventsInterview, ...eventsDeadline, ...eventsEvent]


return ( <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>All</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Interviews</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Deadlines</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Events</Tab>

      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className="rounded-xl bg-white p-3">
            <ul>
                {eventsAll.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </Tab.Panel>
        <Tab.Panel className="rounded-xl bg-white p-3">
        <ul>
                {eventsInterview.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">        
            <ul>
                {eventsDeadline.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
            </Tab.Panel>

            <Tab.Panel className="rounded-xl bg-white p-3">        
            <ul>
                {eventsEvent.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul></Tab.Panel>

            </Tab.Panels>
    </Tab.Group>
    </div> );
}
 
export default Schedule;