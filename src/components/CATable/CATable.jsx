import React, {useState} from 'react';
import styles from './CATable.module.scss';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Image
} from 'react-native';

const CATable = () => {

    const [shouldShow1, setShouldShow1] = useState(true);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [shouldShow3, setShouldShow3] = useState(true);

    return (
        <SafeAreaView style={{flex: 1}}>
                    <View className={styles.CATable}>
                    
            <section className={styles.tableHeadings1}>   
                    <Button
                title="Scores by question"
                className={styles.headingOption1}
                onPress={() => setShouldShow1(!shouldShow1)}
                />
                <Button
                title="Year on year comparison"
                className={styles.headingOption2}
                onPress={() => setShouldShow2(!shouldShow2)}
                />
                <Button
                title="Examples and comments"
                className={styles.headingOption3}
                onPress={() => setShouldShow3(!shouldShow3)}
                />
            </section>

            {shouldShow1 ? (
        
            <div className={styles.tableContent}>
                
                    <div className={styles.responseCount}>20 responses</div>
                    <div className={styles.option1} >Struggles to meet expectations</div>
                    <div className={styles.option2}>Could improve</div>
                    <div className={styles.option3}>Meets expectations</div>
                    <div className={styles.option4}>Exceeds Expectations</div>
                    
                    <p className={styles.question1}>Communicates well with customers?</p>
                    <p className={styles.question2}>Can work autonomously?</p>
                    <p className={styles.question3}>Acts professionally?</p>
                    <p className={styles.question4}>Communicates well with colleagues?</p>
                    
              
                
                    <span className={styles.percentage1}>0%</span>
                    <span className={styles.percentage2}>0%</span>
                    <span className={styles.percentage3}>0%</span>
                    <span className={styles.percentage4}>0%</span>
                    <span className={styles.percentage5}>0%</span>
                    <span className={styles.percentage6}>0%</span>
                    <span className={styles.percentage7}>0%</span>
                    <span className={styles.percentage8}>0%</span>
                    <span className={styles.percentage9}>0%</span>
                    <span className={styles.percentage10}>0%</span>
                    <span className={styles.percentage11}>0%</span>
                    <span className={styles.percentage12}>0%</span>
                    <span className={styles.percentage13}>0%</span>
                    <span className={styles.percentage14}>0%</span>
                    <span className={styles.percentage15}>0%</span>
                    <span className={styles.percentage16}>0%</span>
                
            </div> 
            ) : null}

            {shouldShow2 ? (
                <div>
                    <label className={styles.compare}>Comparing to:</label>
                    <select className={styles.yearCompare}>
                       <option>2021</option> 
                       <option>2022</option>
                       <option>2023</option>
                    </select>

                    <div className={styles.barChart}>

                        <p className={styles.BCHeading1}>Exceeds Expectations</p>
                        <p className={styles.BCHeading2}>Meets Expectations</p>
                        <p className={styles.BCHeading3}>Could Improve</p>
                        <p className={styles.BCHeading4}>Underperforming</p>

                        <span className={styles.BCYear1}>
                            <div className={styles.bar1}>2023</div>
                            <div className={styles.freespace1}></div>
                        </span>

                        <span className={styles.BCYear2}>
                            <div className={styles.bar2}>2022</div>
                            <div className={styles.freespace2}></div>
                        </span>

                        <span className={styles.BCYear3}>
                            <div className={styles.bar3}>2023</div>
                            <div className={styles.freespace3}></div>
                        </span>
                        
                        <span className={styles.BCYear4}>
                            <div className={styles.bar4}>2022</div>
                            <div className={styles.freespace4}></div>
                        </span>

                        <span className={styles.BCYear5}>
                            <div className={styles.bar5}>2023</div>
                            <div className={styles.freespace5}></div>
                        </span>

                        <span className={styles.BCYear6}>
                            <div className={styles.bar6}>2022</div>
                            <div className={styles.freespace6}></div>
                        </span>

                        <span className={styles.underperform1}>2</span>
                        <span className={styles.underperform2}>in 2022</span>

                        <span className={styles.underperform3}>1</span>
                        <span className={styles.underperform4}>in 2023</span>

                        <span className={styles.BCpercent1}>60%</span>
                        <span className={styles.BCpercent2}>50%</span>

                        <span className={styles.BCpercent3}>90%</span>
                        <span className={styles.BCpercent4}>80%</span>

                        <span className={styles.BCpercent5}>2%</span>
                        <span className={styles.BCpercent6}>5%</span>
                    </div>
                </div>
         ) : null}
        </View>
        </SafeAreaView>

    );
};
export default CATable;