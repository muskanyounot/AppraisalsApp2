import React from 'react';
import styles from './QuestionBank.module.scss';

export const QuestionBank = () => {
    return (
        <div className={styles.QuestionBank}>
            <div className={styles.attitude}>
             <label for="attitude">Attitude Questions:</label>
                <select>
                    <option disabled selected hidden>Choose Questions</option>
                    <option>Does this employee act professionally?</option>
                    <option>Does this employee use their time effectively?</option>
                    <option>Do you believe this employee is honest, ethical and trustworthy?</option>
                    <option>Has this employee shown they apply feedback they receive to learn and grow?</option>
                    <option>Does this employee show initiative to solve problems?</option>
                    <option>Does the employee appear to be motivated by their work-related tasks and relationships?</option>
                    <option>Does this employee motivate others to reach goals?</option>
                    <option>Has this employee shown initiative to take the lead on team projects or assignments?</option>
                    <ootion>Do you believe this employee knows and represents our company’s goals and values?</ootion>
                    <option>Can you rely on this employee to follow through with his/her promises and responsibilities?</option>
                    <option>Have you experienced any difficulties with the level of the employee’s motivation?</option>
                    <option>How does the employee demonstrate their motivation and commitment to success in the company?</option>
                </select>
                <button>Add to form</button>
            </div>

            <div className={styles.customer}>
             <label for="customer">Customer Questions:</label>
                <select>
                    <option disabled selected hidden>Choose Questions</option>
                    <option>Does this employee prioritize the needs of the customer over other duties?</option>
                    <option>Does this employee communicate well with customers?</option>
                    <option>Does this employee treat others respectfully?</option>
                    <option>Is this employee able to resolve conflict appropriately?</option>
                    <option>Is this employee a good active listener?</option>
                    <option>Is this employee effective at managing their own emotions and the emotions of others?</option>
                    <option>Does this employee take initiative to seek clarification on things they don’t understand?</option>
                </select>
                <button>Add to form</button>
            </div>

            <div className={styles.managerial}>
             <label for="managerial">Managerial Questions:</label>
                <select>
                    <option disabled selected hidden>Choose Questions</option>
                    <option>Is this manager effective at solving problems?</option>
                    <option>Do the actions of this manager Inspire growth and development in others?</option>
                    <option>Do you receive constructive and helpful feedback from this manager?</option>
                    <option>Is this manager available to provide help and feedback when you want it?</option>
                    <option>When making important decisions, does this manager consider the opinions of others?</option>
                    <option>Does this manager consistently reward employees for good performance or behavior?</option>
                    <option>Do you feel this manager sets clear direction that aligns with the organization’s strategy?</option>
                    <option>Does this manager always control emotions and behavior, even when faced with high-conflict or stressful situations?</option>
                </select>
                <button>Add to form</button>
            </div>

            <div className={styles.engagement}>
             <label for="engagement">Engagement Questions:</label>
                <select>
                    <option disabled selected hidden>Choose Questions</option>
                    <option>Does this employee communicate well with colleagues?</option>
                    <option>Does this employee communicate well with supervisors?</option>
                    <option>When this employee delivers presentations, do they appear to do so with ease and composure?</option>
                    <option>Does this employee proactively seek to understand the views and opinions of others?</option>
                    <option>Is this employee open to receiving feedback from supervisors and peers?</option>I
                    <option>Is this employee’s communication presented in a clear, concise and organized manner?</option>
                    <option>Does this employee write clearly and concisely, using appropriate grammar and style?</option>
                    <option>Does this employee work well with others to get things done?</option>
                    <option>Does this employee follow instructions to achieve the desired results?</option>
                    <option>Does this employee help create a culture that fosters and values collaboration?</option>
                    <option>Does this employee seek to improve by learning new skills and techniques?</option>
                    <option>Does this employee build meaningful and positive relationships with others?</option>
                    <option>Does this employee present themselves as a reliable and committed team member?</option>
                    <option>Can this employee recognize and manage the effects of personal stress and the stress of others?</option>
                    <option>Do the actions of this employee show the core values of the company and seek to inspire a positive company culture?</option>
                    <option>Can you provide an example of how the employee has positively contributed using leadership?</option>
                </select>
                <button>Add to form</button>
            </div>

            <div className={styles.performance}>
             <label for="performance">Performance Questions:</label>
                <select>
                    <option disabled selected hidden>Choose Questions</option>
                    <option>Does this employee ask questions to evaluate issues?</option>
                    <option>Is this employee able to work autonomously (without direction)?</option>
                    <option>Does this employee react quickly and appropriately to unexpected challenges?</option>
                    <option>Are this employee’s solutions to problems and challenges clear and effective?</option>
                    <option>Is this employee’s approach to resolving issues innovative and imaginative?</option>
                    <option>Can this employee identify patterns in conflicting information, data or events?</option>
                    <option>Does this employee seek the opinions of others and use this input when resolving issues?</option>
                    <option>Does this employee bring together information from relevant sources when making a decision?</option>
                    <option>Can this employee effectively analyze issues and break them down into their components?</option>
                    <option>Does this employee understand both the short-term and long-term implications of their decisions?</option>
                    <option>Are the employee’s work methods and approach to accomplishing the job effective, efficient, and continuously improving?</option>
                </select>
                <button>Add to form</button>
            </div>

            <div className={styles.openended}>
             <label for="openended">Open Ended Questions:</label>
                <select>
                <option disabled selected hidden>Choose Questions</option>
                <option>Do you have any additional feedback about this area?</option>
                <option>Can you provide a specific example of something this employee does well?</option>
                <option>Can you provide a specific example of an area in which this employee could improve?</option>
                <option>What sets this employee apart from others on their team or within the organization?</option>
                </select>
                <button>Add to form</button>
            </div>

            <div className={styles.ownquestion}>
                <label for="ownquestion" className={styles.ownQuestionLabel}>Write your own question</label>
                <select>
                    <option disabled selected hidden>Select Category</option>
                    <option>Attitude</option>
                    <option>Customer</option>
                    <option>Managerial</option>
                    <option>Engagement</option>
                    <option>Performance</option>
                </select>
                <input type="text" className={styles.inputtext} placeholder="Write your question here"></input>
                <button className={styles.submitownquestion}>Add to form</button>
            </div>
            <div className={styles.buildFormContainer}>
                <button className={styles.buildForm}>Build Form</button>
            </div>
        </div>
    )
}
export default QuestionBank;


