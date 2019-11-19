<template>
    <layout>
        <div class="bg-white px-4 pt-6 pb-4 relative shadow-sm z-20">
            <div class="max-w-6xl mx-auto">
                <link-to to="/admin/jobs" class="mb-2">
                    <icon name="chevron-left" class="-ml-2"></icon>Back to Jobs
                </link-to>
                <div class="flex w-full justify-between items-center">
                    <div class="flex-1">
                        <heading size="heading">Create New Job Posts</heading>
                    </div>
                    <div>
                        <loading-button
                            v-if="companies.length > 0"
                            size="small"
                            ref="jobSaveButton"
                            class="mt-2 md:mt-0"
                            @click="saveJobPost"
                            >Save Job Post</loading-button
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10 px-4">
            <div class="max-w-6xl mx-auto" v-if="companies.length <= 0">
                <empty-state class="lg:py-32">
                    <div
                        class="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-center mx-auto"
                    >
                        <icon name="search" class="w-8 h-8"></icon>
                    </div>

                    <heading class="mt-5 mb-1" size="heading"
                        >No Companies found</heading
                    >
                    <p>
                        Please create atleast one company/organization details
                        to add a job post.
                    </p>

                    <loading-button
                        tag="a"
                        to="/admin/companies/create"
                        size="small"
                        class="mt-6"
                    >
                        <icon name="plus" class="mr-1"></icon>Create Company
                    </loading-button>
                </empty-state>
            </div>
            <div class="max-w-6xl mx-auto" v-else>
                <div class="md:flex -mx-4">
                    <div class="px-4">
                        <alert class="mb-4">
                            <strong>Note:</strong> Job postings once created
                            will go to the admin first for moderation and then
                            only will be published on the website. It will take
                            less than 24hrs for the moderation process to get
                            completed.
                        </alert>
                        <div class="md:flex mb-10 -mx-4">
                            <div class="md:w-1/3 mb-3 px-4">
                                <heading size="large" class="mb-1"
                                    >Job Details</heading
                                >
                                <heading class="mb-4"
                                    >Introduce job seekers to the role by
                                    describing responsibilities, skills and
                                    technologies...</heading
                                >
                            </div>
                            <div class="md:w-2/3 px-4">
                                <card>
                                    <select-input
                                        v-model="job.company_id"
                                        label="Company"
                                        class="mb-4"
                                        :options="companies"
                                        select-value="value"
                                        :errors="errors['company_id']"
                                        @keydown="delete errors['company_id']"
                                    >
                                        <option value="null" disabled
                                            >Select company</option
                                        >
                                    </select-input>

                                    <text-input
                                        v-model="job.job_title"
                                        label="Title"
                                        placeholder="eg. Senior Web Developer"
                                        class="mb-4"
                                        :errors="errors['job_title']"
                                        @keydown="delete errors['job_title']"
                                    ></text-input>
                                    <text-input
                                        v-model="job.job_location"
                                        label="Location"
                                        placeholder="City or Town/Place name"
                                        class="mb-4"
                                        :errors="errors['job_location']"
                                        @keydown="delete errors['job_location']"
                                    ></text-input>
                                    <div class="flex -mx-4">
                                        <div class="w-1/2 px-4">
                                            <select-input
                                                v-model="job.job_type"
                                                label="Type"
                                                class="mb-4"
                                                :options="jobtypes"
                                                :errors="errors['job_type']"
                                                @keydown="
                                                    delete errors['job_type']
                                                "
                                            >
                                                <option value="null" disabled
                                                    >Select job type</option
                                                >
                                            </select-input>
                                        </div>
                                        <div class="w-1/2 px-4">
                                            <select-input
                                                v-model="job.job_salary"
                                                label="Salary (monthly)"
                                                class="mb-4"
                                                :options="salaries"
                                                :errors="errors['job_salary']"
                                                @keydown="
                                                    delete errors['job_salary']
                                                "
                                            >
                                                <option value="null" disabled
                                                    >Select salary</option
                                                >
                                            </select-input>
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-4">
                                        <div class="w-1/2 px-4">
                                            <select-input
                                                v-model="job.job_category"
                                                label="Category"
                                                class="mb-4"
                                                :options="categories"
                                                :errors="errors['job_category']"
                                                @keydown="
                                                    delete errors[
                                                        'job_category'
                                                    ]
                                                "
                                            >
                                                <option value="null" disabled
                                                    >Select job category</option
                                                >
                                            </select-input>
                                        </div>
                                        <div class="w-1/2 px-4">
                                            <select-input
                                                v-model="
                                                    job.job_experience_level
                                                "
                                                label="Experience Level"
                                                class="mb-4"
                                                :options="experiencelevels"
                                                :errors="
                                                    errors[
                                                        'job_experience_level'
                                                    ]
                                                "
                                                @keydown="
                                                    delete errors[
                                                        'job_experience_level'
                                                    ]
                                                "
                                            >
                                                <option value="null" disabled
                                                    >Select experience
                                                    level</option
                                                >
                                            </select-input>
                                        </div>
                                    </div>

                                    <text-input
                                        v-model="job.job_email"
                                        type="email"
                                        label="Email for candidate"
                                        placeholder="Email to send resume/cv"
                                        class="mb-4"
                                        :errors="errors['job_email']"
                                        @keydown="delete errors['job_email']"
                                    ></text-input>

                                    <tags-input
                                        label="Skills"
                                        v-model="job.job_skills"
                                        class="mb-4"
                                        placeholder="Add a skill and press enter"
                                        :errors="errors['job_skills']"
                                    ></tags-input>

                                    <simple-editor
                                        label="Description"
                                        v-model="job.job_description"
                                        class="mb-4"
                                        :errors="errors['job_description']"
                                        @keydown="
                                            delete errors['job_description']
                                        "
                                    ></simple-editor>

                                    <!-- <ckeditor
                                        :editor="editor"
                                        v-model="job.job_description"
                                        :config="editorConfig"
                                    ></ckeditor> -->
                                </card>
                            </div>
                        </div>

                        <div class="md:flex mb-10 -mx-4">
                            <div class="md:w-1/3 px-4">
                                <heading size="large" class="mb-1"
                                    >Job Post Date</heading
                                >
                                <heading class="mb-4"
                                    >The date when the job post will start
                                    appear in the site & closed for
                                    applying.</heading
                                >
                            </div>
                            <div class="md:w-2/3 px-4">
                                <card>
                                    <div class="flex flex-wrap -mx-4">
                                        <div class="w-1/2 px-4">
                                            <date-input
                                                label="Job Opening Date"
                                                class="w-48 mb-4"
                                                placeholder="Select date"
                                                v-model="job.job_starting_date"
                                                :errors="
                                                    errors['job_starting_date']
                                                "
                                                readonly
                                            ></date-input>
                                        </div>
                                        <div class="w-1/2 px-4">
                                            <date-input
                                                label="Job Closing Date"
                                                class="w-48"
                                                placeholder="Select date"
                                                v-model="job.job_closing_date"
                                                :errors="
                                                    errors['job_closing_date']
                                                "
                                                readonly
                                            ></date-input>
                                        </div>
                                    </div>
                                </card>
                            </div>
                        </div>

                        <div class="md:flex -mx-4">
                            <div class="md:w-1/3 px-4">
                                <heading size="large" class="mb-1"
                                    >SEO Content</heading
                                >
                                <heading class="mb-4"
                                    >Write great content optimized for
                                    SEO</heading
                                >
                            </div>
                            <div class="md:w-2/3 px-4">
                                <card>
                                    <textarea-input
                                        label="Meta Description"
                                        class="mb-4"
                                        placeholder="eg. Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)Cross-browser and platform testing as standard practiceExperience using Invision a plusExperience in video production a plus or, at a minimum, a willingness to learn"
                                        v-model="job.meta_description"
                                        :errors="errors['meta_description']"
                                    ></textarea-input>
                                    <tags-input
                                        label="Meta Keywords"
                                        v-model="job.meta_keywords"
                                        class="mb-4"
                                        :errors="errors['meta_keywords']"
                                        placeholder="Add a tag and hit enter"
                                    ></tags-input>
                                    <text-input
                                        label="SEO Title"
                                        class="mb-4"
                                        placeholder="eg. Senior web developer in guwahati"
                                        v-model="job.seo_title"
                                        :errors="errors['seo_title']"
                                    ></text-input>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";
import Card from "@/Shared/tuis/Card";
import TextInput from "@/Shared/tuis/TextInput";
import SelectInput from "@/Shared/tuis/SelectInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import SimpleEditor from "@/Shared/tuis/SimpleEditor";
import SwitchInput from "@/Shared/tuis/SwitchInput";
import DateInput from "@/Shared/tuis/DateInput";
import Alert from "@/Shared/tuis/Alert";
import TextareaInput from "@/Shared/tuis/TextareaInput";
import FileInput from "@/Shared/tuis/FileInput";
import EmptyState from "@/Shared/tuis/EmptyState";
import TagsInput from "@/Shared/tuis/TagsInput";

// import CKEditor from "@ckeditor/ckeditor5-vue";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;

export default {
    components: {
        Layout,
        Heading,
        Icon,
        LinkTo,
        Card,
        TextInput,
        SelectInput,
        SimpleEditor,
        LoadingButton,
        SwitchInput,
        DateInput,
        Alert,
        TextareaInput,
        FileInput,
        EmptyState,
        TagsInput

        // ckeditor: CKEditor.component
    },
    props: [
        "jobtypes",
        "categories",
        "industries",
        "errors",
        "companies",
        "experiencelevels"
    ],
    data() {
        return {
            job: {
                job_title: null,
                job_location: null,
                job_category: null,
                job_experience_level: null,
                job_type: null,
                job_salary: null,
                job_skills: [],
                job_email: null,
                job_description: ``,
                job_starting_date: currentDate,
                job_closing_date: currentDate,
                company_id: null,
                meta_description: null,
                meta_keywords: [],
                seo_title: null
            },
            companySize: {
                "0-25": "0-25",
                "25-50": "25-50",
                "50-100": "50-100",
                "100+": "100+"
            },
            salaries: {
                "10k-15k": "10k-15k",
                "15k-20k": "15k-20k",
                "20k-40k": "20k-40k",
                "40k+": "40k+"
            }

            // editor: ClassicEditor,
            // editorConfig: {
            //     toolbar: {
            //         items: [
            //             "heading",
            //             "bold",
            //             "italic",
            //             "link",
            //             "bulletedList",
            //             "numberedList",
            //             "undo",
            //             "redo",
            //             "table"
            //         ]
            //     }
            // }
        };
    },
    methods: {
        saveJobPost() {
            this.$refs.jobSaveButton.startLoading();

            this.$inertia
                .post(this.route("admin.jobs.store"), this.job)
                .then(() => {
                    this.$refs.jobSaveButton.stopLoading();
                })
                .catch(() => {
                    this.$refs.jobSaveButton.stopLoading();
                });
        }
    }
};
</script>

<style>
.vue-file-agent .file-preview-wrapper:before {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#profile-pic-demo .drop-help-text {
    display: none;
}
#profile-pic-demo .is-drag-over .drop-help-text {
    display: block;
}
#profile-pic-demo .profile-pic-upload-block {
    border: 2px dashed transparent;
    padding: 20px;
    padding-top: 0;
}

#profile-pic-demo .is-drag-over.profile-pic-upload-block {
    border-color: #aaa;
}
#profile-pic-demo .vue-file-agent {
    width: 180px;
    float: left;
    margin: 0 15px 5px 0;
    border: 0;
    box-shadow: none;
}
</style>
