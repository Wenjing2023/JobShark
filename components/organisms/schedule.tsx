import Title from "../atoms/title";
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

interface Event {
    title: string;
    description: string;
}

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
    return (
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
        </div>
      </a>
    );
};


const Schedule: React.FC = () => {




    const eventsInterview: Event[] = [
        { title:'Interview 1', description: 'A wee chat'}, 
        { title: 'Interview 2', description: 'Technical inteview'}
    ];
    const eventsDeadline: Event[] = [
        { title:'Deadline 1', description: 'Deadline'}, 
        { title: 'Deadline 2', description: 'Another deadline'}
    ];
    const eventsEvent: Event[] = [
        { title:'Event 1', description: 'Networking'}, 
        { title: 'Event 2', description: 'Party'}
    ];
    const eventsAll: Event[] = [...eventsInterview, ...eventsDeadline, ...eventsEvent]


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
                {eventsAll.map((event, index) => (
                    <Fragment key={index}>
                        <EventCard event={event} />
                        </Fragment>
                ))}
        </Tab.Panel>
        <Tab.Panel className="rounded-xl bg-white p-3">
                {eventsInterview.map((event, index) => (
                    <Fragment key={index}>
                        <EventCard event={event} />
                        </Fragment>
                ))}
        </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">
                {eventsDeadline.map((event, index) => (
                    <Fragment key={index}>
                        <EventCard event={event} />
                        </Fragment>
                ))}
        </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">
                {eventsEvent.map((event, index) => (
                    <Fragment key={index}>
                        <EventCard event={event} />
                        </Fragment>
                ))}
        </Tab.Panel>

            </Tab.Panels>
    </Tab.Group>
    </div> );
}
 
export default Schedule;