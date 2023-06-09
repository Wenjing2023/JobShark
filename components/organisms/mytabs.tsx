import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import Title from '../atoms/title';

const MyTabs = () => {


    const jobListToApply = ['CodeClan Instructor', 'CodeClan Technical Assistant']
    const jobListApplied = ['SkyScanner Developer']
    const jobListInterview = ['X-Design Developer']
    const jobListResult = ['Google CEO']


    return ( <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>To Apply</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Applied</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Interview</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Result</Tab>

      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className="rounded-xl bg-white p-3">
            <ul>
                {jobListToApply.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </Tab.Panel>
        <Tab.Panel className="rounded-xl bg-white p-3">
        <ul>
                {jobListApplied.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">        
            <ul>
                {jobListInterview.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
            </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">        
            <ul>
                {jobListResult.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul></Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
    </div> );
}
 
export default MyTabs;