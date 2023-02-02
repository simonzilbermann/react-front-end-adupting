import React from 'react';
import '../assets/css/Negishot.css';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';


const Negishot = () =>{
    return (<div>
        	  <section className="page_mission">
                <div className="container-fluid" >
                <div className="row">
                    <div className="module-header">
                    <h2>מבוא</h2>
              
                    <p>
                    אנו רואים חשיבות רבה במתן אפשרות שווה לאנשים עם מוגבלות להשתמש במידע המוצג באתר ולאפשר חווית גלישה טובה.

                    באתר הושקעו משאבים רבים להקלת השימוש בו עבור אנשים עם מוגבלויות.</p>
                </div> 
            </div>
            </div>

            </section>
                <div  className="how-section1">
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src={pic1} className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                          <h4>?כיצד עובדת ההנגשה באתר</h4>
                              <p  className="text-muted">באתר מוצב תפריט הנגשה. לחיצה על התפריט מאפשרת פתיחת כפתורי ההנגשה. לאחר בחירת נושא בתפריט יש להמתין לטעינת הדף.
התוכנה פועלת בדפדפנים הפופולריים: Chrome, Firefox, Safari, Opera בכפוף לתנאי היצרן. הגלישה במצב נגישות מומלצת בדפדפן כרום.</p>
                        </div>
                    </div>



                     
   
                    <div className="row">
                        <div className="col-md-6">
                             <h4>:אפשרויות הנגישות בתפריט</h4>
                             <ul className="text-muted">
                            <li>התאמה לניווט מקלדת- מתן אפשרות לניווט ע"י מקלדת</li>
                            <li>התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA , JAWS</li>
                            <li>חסימת הבהובים - עצירת אלמנטים נעים וחסימת הבהובים</li>
                            <li>הגדלת פונט האתר ל-4 גדלים שונים</li>
                            <li>התאמות ניגודיות - שינוי ניגודיות צבעי האתר</li>
                            <li>התאמת האתר לעיוורי צבעים</li>
                            <li>שינוי הפונט לקריא יותר</li>
                            <li>הגדלת הסמן ושינוי צבעו לשחור או לבן</li>
                            <li>הגדלת התצוגה לכ-200%</li>
                            <li>הדגשת קישורים באתר</li>
                            <li>הדגשת כותרות באתר</li>
                            <li>הצגת תיאור אלטרנטיבי לתמונות</li>
                            <li>הצהרת נגישות</li>
                            <li>שליחת משוב נגישות</li>
                        </ul>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src={pic2} className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 how-img">
                             <img src={pic3} className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                       <h4 >:פניה לרכז הנגישות</h4>
                        <ol  className="text-muted">
                          <li>אם במהלך הגלישה באתר נתקלתם בקושי בנושא נגישות, צוות הנגישות של החברה עומד לרשותכם במגוון ערוצים.</li>
                          <li>פרטי רכזת נגישות בחברה:</li>
                          <li>שם: רז צלח</li>
                          <li>כתובת המייל: raz62015@gmail.com </li>
                          <li>טלפון: 054-3018677</li>
                        </ol>
                        </div>
                    </div>
                </div>

    </div>);
}
export default Negishot;