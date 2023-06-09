import Title from "../atoms/title";
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

interface Event {
    title: string;
    description: string;
    date: string;
}

interface EventCardProps {
    event: Event;
}




const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2">
          <div className="flex items-center justify-center w-24 bg-jaws-blue">
            <span className="text-2xl text-white px-4 py-8">{event.date}</span>
          </div>
          <div className="flex-1 flex flex-col p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
          </div>
        </a>
      );
    };


const Schedule: React.FC = () => {




    const eventsInterview: Event[] = [
        { title:'Interview 1', description: 'A wee chat about a potential job. Meet at office to discuss. Lots to talk about. Coffee to drink. Colleagues to meet.  Sometimes there is a dog.', date: '30 June 2023'}, 
        { title: 'Interview 2', description: 'Technical inteview', date: '01 July 2023'}
    ];
    const eventsDeadline: Event[] = [
        { title:'Deadline 1', description: 'Deadline for this big fancy well paid job you want', date: '10 July 2023'}, 
        { title: 'Deadline 2', description: 'Another deadline for a job that pays minimum wage, but you are desperate', date: '04 July 2023'}
    ];
    const eventsEvent: Event[] = [
        { title:'Event 1', description: 'Networking event where you can schmooze with others and get some free booze', date: '05 July 2023'}, 
        { title: 'Event 2', description: 'Party at the Chanter. Oh yeah.', date: '05 July 2023'}
    ];
    const eventsAll: Event[] = [...eventsInterview, ...eventsDeadline, ...eventsEvent]


return ( <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-jaws-blue text-white':'text-blue-700')}>All</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-jaws-blue text-white':'text-blue-700')}>Interviews</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-jaws-blue text-white':'text-blue-700')}>Deadlines</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-jaws-blue text-white':'text-blue-700')}>Events</Tab>

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