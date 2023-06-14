import { FormEvent, useState } from "react";
import Icon from "../atoms/icon";
import IconKind from "../types/enums/iconkind";
import TextInput from "../atoms/textinput";
import Button from "../atoms/button";
import Job from "../types/job";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import postApi from "@/services/postApi";
import getApi from "@/services/getApi";

interface JobFormProps {
    handleToggleJobForm: () => void;
    user: UserProfile | undefined;
}

const JobForm = ({ handleToggleJobForm, user }: JobFormProps) => {
    const [state, setState] = useState<any>({
        employer_name: "",
        job_title: "",
        notes: "",
    });

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: (typeof state)[keyof typeof state] = event.target.value;
        setState({ ...state, [event.target.id]: value });
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { response } = await getApi("api/my/getuser", {
            headers: { sub: user?.sub },
        });

        if (user?.sub) {
            const jobToPost: Job = {
                user: {
                    id: response.id,
                },
                jobTitle: state.job_title,
                employerName: state.employer_name,
                notes: state.notes,
            };

            const jsonToPost = JSON.stringify(jobToPost);

            postApi("api/my/createjob", { body: jsonToPost });
        }
    };
    return (
        <div className="  bg-jaws-white p-8 m-8 md:p-8">
            <form
                className="flex flex-col mb-4 md:flex md:justify-between md:space-x-4 md:mb-8"
                onSubmit={onSubmit}
            >
                <div className="flex items-center space-x-2 m-5 mb-2 md:mb-0">
                    <label
                        htmlFor="email-address-icon"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                        Company Name:
                    </label>
                    <TextInput id="employer_name" onChange={onFieldChange} />
                    <label
                        htmlFor="email-address-icon"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                        Job Title:
                    </label>
                    <TextInput id="job_title" onChange={onFieldChange} />

                    <Icon
                        iconKind={IconKind.Close}
                        onClick={handleToggleJobForm}
                    />
                </div>

                <div className="flex items-center space-x-2 m-5 mb-2 md:mb-0">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                        Notes:
                    </label>
                    <TextInput id="notes" onChange={onFieldChange} />
                </div>
                <div>
                    <Button
                        className="bg-jaws-blue text-jaws-white font-xs rounded-lg hover:bg-jaws-light-blue float-right m-5 w-20 px-1 py-2"
                        type="submit"
                        buttonText="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default JobForm;
