import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';

const Info =()=>{
    return (<div>




<section id="team" className="pb-5">
    <div className="container">
        <h5 className="section-title h1">תקנון </h5>
        <div className="row">
          
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className="img-fluid" src={pic1} alt="card"/></p>
                                    <h6 className="card-title">אוכלוסיית יעד ותנאים מקדימים</h6>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    
                                    <ul className="list-inline">
                                        <li className="list-inline-item">בני זוג נשואים המקיימים משק בית משותף לפחות שנתיים</li>
                                        <li className="list-inline-item">במקרים מסוימים ייתכן כי גם בני זוג שאינם נשואים, כולל בני זוג מאותו מין יוכלו להגיש בקשה לאמץ ילד.</li>
                                        <li className="list-inline-item">כך למשל, בשנת 2019 פסק בית המשפט לענייני משפחה כי גם בני זוג ידועים בציבור כשירים לשמש כהורים מאמצים.</li>
                                        <li className="list-inline-item">מאותו המין לאמץ ילד שאינו ילדו של אחד מבני הזוג. מאותו המין לאמץ ילד שאינו ילדו של אחד מבני הזוג.y בשנת 2008 הודיע היועץ המשפטי לממשלה כי בנסיבות מתאימות, כאשר מדובר בטובת הילד המאומץ, ניתן גם להסכים לבקשות של בני זוג</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={pic2} alt="card"/></p>
                                    <h6 className="card-title">בנוסף, צריכים להתקיים כל התנאים הבאים:</h6>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                        ההפרש בין גיל הילד לגיל של כל אחד מההורים המאמצים הוא 18 שנה לפחות ואינו עולה על 43 שנה. ניתן לחרוג מכלל זה כשמדובר באימוץ ילד של בן/בת זוג, או אם בית המשפט מתרשם כי זוהי טובת הילד.   
                                        </li>
                                        <li className="list-inline-item">
                                        ההורים המאמצים צריכים להיות בני אותה דת כמו הילד המאומץ.
                                        </li>
                                        <li className="list-inline-item">
                                        ההורים המאמצים סיימו לפחות 12 שנות לימוד.
                                        </li>
                                        <li className="list-inline-item">
                                        להורים המאמצים יש הכנסה קבועה ויכולת לפרנס ולהיענות לצרכיו המשתנים של הילד המאומץ.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={pic3} alt="card"/></p>
                                    <h4 className="card-title">למי ואיך פונים?</h4>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                        מי שמעוניינים לאמץ ילד בארץ ימלאו שאלון למועמדים לאימוץ, ויצרפו את המסמכים הבאים
                                        </li>
                                        <li className="list-inline-item">
                                        תמונה עדכנית של בני הזוג/המשפחה (לא תמונת דרכון).
                                        </li>
                                        <li className="list-inline-item">
                                        ילום תעודת זהות של כל אחד מהמבקשים, כולל הספח.
                                        </li>
                                        <li className="list-inline-item">
                                        מסמך רשמי המעיד על מעמד אישי (כגון צילום תעודת נישואין).  
                                        </li>
                                        <li className="list-inline-item">
                                        תולדות חיים, בכתב יד, של כל אחד מהמבקשים.
                                           </li>
                                           <li className="list-inline-item">
                                           אישורים המעידים על הכנסות (צילום טופס 106, או טופס שומה אחרון ממס הכנסה, או 3 תלושי משכורת).
                                           </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                          
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div class="card-body text-center mt-4">
                                    <ul class="list-inline">
                                    <li className="list-inline-item">פונים יחידים (כלומר ללא בני זוג) יכולים להיות מועמדים לאימוץ ילד בכל אחת מהנסיבות הבאות</li>
                                        <li className="list-inline-item">לא נמצא זוג שביקש לאמץ את הילד (למשל במקרה של אימוץ ילד בוגר עם מוגבלות).</li>
                                        <li className="list-inline-item">בן זוגם נפטר, והם מבקשים לאמץ את ילדו.</li>
                                        <li className="list-inline-item">הורי הילד נפטרו, והם קרובי משפחתם המבקשים לאמץ אותו.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                          
                       
                        </div>
                        <div class="backside">
                          
                            <div class="card">
                          
                                <div class="card-body text-center mt-4">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                        באפשרות ההורים המאמצים להציע תנאי מגורים סבירים, כולל חדר פרטי עבור הילד המאומץ.
                                        </li>
                                        <li class="list-inline-item">
                                        ההורים המאמצים לא הורשעו בעבירה נגד קטינים, בעבירת מין או עבירת אלימות, או בעבירה אחרת שפוסלת אותם מלשמש כהורה מאמץ בהתאם לשיקול דעת העו"ס.
                                        </li>
                                        <li class="list-inline-item">
                                        ההורים המאמצים בריאים נפשית ופיזית.
                                        </li>
                                        <li class="list-inline-item">
                                        התפקוד המשפחתי, הזוגי והחברתי של ההורים המאמצים תקין.
                                        </li>
                                        <li class="list-inline-item">
                                        על-פי התרשמות העו"ס, ההורים המאמצים מסוגלים להתמודד עם משימות האימוץ.
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body text-center">
                     
                     <h4 class="card-title">מקורות משפטיים ורשמיים</h4>
                     <h4 class="card-title">  חקיקה ונהלים</h4>
                     <a href="https://www.nevo.co.il/law_html/Law01/055_075.htm#Seif3">חוק אימוץ ילדים</a>
                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">שלבי ההליך</h4>
                                    <ul class="list-inline">
                                    <li class="list-inline-item">
                                    לאחר קבלת השאלון והמסמכים המצורפים, הפונים יוזמנו לפגישה עם עובדת סוציאלית בשירות למען הילד שתלווה אותם לאורך התהליך.
                                        </li>
                                        <li class="list-inline-item">
                                        התהליך יכלול מספר מפגשים עם העובדת הסוציאלית, אבחון פסיכולוגי וביקור בביתם של המועמדים לאמץ, ובהמשך הכנה במסגרת קבוצתית ג לתפקידם החדש כהורים מאמצים.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">חשוב לדעת</h4>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                        זוגות ללא ילדים יקבלו עדיפות באימוץ תינוקות וילדים עד גיל שנתיים.
                                        </li>
                                        <li class="list-inline-item">
                                        זוגות שהם כבר הורים לילדים או זוגות ללא ילדים המסכימים לכך, יוכלו לאמץ ילדים מעל גיל שנתיים או ילדים עם צרכים מיוחדים.
                                        </li>
                                        <li class="list-inline-item">
                                        בני זוג מאותו מין אינם פסולים מלשמש כהורים מאמצים, אך נטייתם המינית תילקח בחשבון בעת ההחלטה על אישור האימוץ. לפרטים נוספים ראו ג בפורטל אימוץ.
                                        </li>
                                        <li class="list-inline-item">
                                        בני זוג יכולים לאמץ את ילדיהם הביולוגיים של בת/בן זוגם.
קרובי משפחה של הילדים המאומצים (כגון דודים או סבים) יכולים לאמץ את הילדים אם בית המשפט הורה זאת.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          

        </div>
    </div>
</section>


      {/* <section className="our-webcoderskull padding-lg">
  <div className="container">
    <div className="row heading heading-icon">
        <h2>Our Team</h2>
    </div>
    <ul className="row">
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure className="img-responsive"><img src={pic1} className="rounded-circle img-fluid"  alt=""/></figure>
            <h4 >אוכלוסיית יעד ותנאים מקדימים</h4>
            <ul className="follow-us clearfix">
                            <li>בני זוג נשואים המקיימים משק בית משותף לפחות שנתיים</li>
                            <li>במקרים מסוימים ייתכן כי גם בני זוג שאינם נשואים, כולל בני זוג מאותו מין יוכלו להגיש בקשה לאמץ ילד.</li>
                            <li>כך למשל, בשנת 2019 פסק בית המשפט לענייני משפחה כי גם בני זוג ידועים בציבור כשירים לשמש כהורים מאמצים.</li>
                            <li> מאותו המין לאמץ ילד שאינו ילדו של אחד מבני הזוג. מאותו המין לאמץ ילד שאינו ילדו של אחד מבני הזוג.y בשנת 2008 הודיע היועץ המשפטי לממשלה כי בנסיבות מתאימות, כאשר מדובר בטובת הילד המאומץ, ניתן גם להסכים לבקשות של בני זוג</li>
                            <li>פונים יחידים (כלומר ללא בני זוג) יכולים להיות מועמדים לאימוץ ילד בכל אחת מהנסיבות הבאות</li>
                            <li>לא נמצא זוג שביקש לאמץ את הילד (למשל במקרה של אימוץ ילד בוגר עם מוגבלות).</li>
                            <li>בן זוגם נפטר, והם מבקשים לאמץ את ילדו.</li>
                            <li>הורי הילד נפטרו, והם קרובי משפחתם המבקשים לאמץ אותו.</li>
                            </ul>
          </div>
      </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure className="img-responsive"><img src="http://www.webcoderskull.com/img/team1.png"  alt=""/></figure>
            <h4 className="subheading" >בנוסף, צריכים להתקיים כל התנאים הבאים:</h4>
            <ol className="follow-us clearfix">
                              <li>  ההפרש בין גיל הילד לגיל של כל אחד מההורים המאמצים הוא 18 שנה לפחות ואינו עולה על 43 שנה. ניתן לחרוג מכלל זה כשמדובר באימוץ ילד של בן/בת זוג, או אם בית המשפט מתרשם כי זוהי טובת הילד. </li>
                              <li>ההורים המאמצים צריכים להיות בני אותה דת כמו הילד המאומץ.</li>
                              <li>ההורים המאמצים סיימו לפחות 12 שנות לימוד.</li>
                              <li>להורים המאמצים יש הכנסה קבועה ויכולת לפרנס ולהיענות לצרכיו המשתנים של הילד המאומץ.</li>
                              <li>באפשרות ההורים המאמצים להציע תנאי מגורים סבירים, כולל חדר פרטי עבור הילד המאומץ.</li>
                              <li> ההורים המאמצים לא הורשעו בעבירה נגד קטינים, בעבירת מין או עבירת אלימות, או בעבירה אחרת שפוסלת אותם מלשמש כהורה מאמץ בהתאם לשיקול דעת העו"ס.</li>
                              <li>ההורים המאמצים בריאים נפשית ופיזית.</li>
                              <li>התפקוד המשפחתי, הזוגי והחברתי של ההורים המאמצים תקין.</li>
                              <li>על-פי התרשמות העו"ס, ההורים המאמצים מסוגלים להתמודד עם משימות האימוץ.</li>
                            </ol>
          </div>
      </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure className="img-responsive"><img src={pic2} className="rounded-circle img-fluid"  alt=""/></figure>
            <h4 >למי ואיך פונים?</h4>
            <ul className="follow-us clearfix">
                                                <li>מי שמעוניינים לאמץ ילד בארץ ימלאו שאלון למועמדים לאימוץ, ויצרפו את המסמכים הבאים</li>
                                              </ul>
                                                 <ol>
                                                    <li>תמונה עדכנית של בני הזוג/המשפחה (לא תמונת דרכון).</li>
                                                    <li>צילום תעודת זהות של כל אחד מהמבקשים, כולל הספח.</li>
                                                    <li>מסמך רשמי המעיד על מעמד אישי (כגון צילום תעודת נישואין).</li>
                                                    <li>תולדות חיים, בכתב יד, של כל אחד מהמבקשים.</li>
                                                    <li>אישורים המעידים על הכנסות (צילום טופס 106, או טופס שומה אחרון ממס הכנסה, או 3 תלושי משכורת).</li>
                                                </ol>
                                                <ul>
                                                <li>יש להגיש את טופס השאלון והמסמכים אל מזכירות השירות למען הילד במחוז שמתגוררים בו.</li>
                                                <li>תאריך ההרשמה לשירות ייקבע על-פי היום שבו יתקבלו המסמכים.</li>
                                                </ul>
          </div>
       </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure className="img-responsive"><img src={pic3} className="rounded-circle img-fluid"  alt=""/></figure>
            <h4>שלבי ההליך</h4>
            <ul className="follow-us clearfix">
          
                                                <li>לאחר קבלת השאלון והמסמכים המצורפים, הפונים יוזמנו לפגישה עם עובדת סוציאלית בשירות למען הילד שתלווה אותם לאורך התהליך.</li>
                                                <li>התהליך יכלול מספר מפגשים עם העובדת הסוציאלית, אבחון פסיכולוגי וביקור בביתם של המועמדים לאמץ, ובהמשך הכנה במסגרת קבוצתית ג לתפקידם החדש כהורים מאמצים.</li>
                                              </ul>
          </div>
      </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure className="img-responsive"><img src={pic4} className="rounded-circle img-fluid"  alt=""/></figure>
            <h4>חשוב לדעת</h4>
            <ul className="follow-us clearfix">
 
                                            <li>זוגות ללא ילדים יקבלו עדיפות באימוץ תינוקות וילדים עד גיל שנתיים.</li>
                                            <li>זוגות שהם כבר הורים לילדים או זוגות ללא ילדים המסכימים לכך, יוכלו לאמץ ילדים מעל גיל שנתיים או ילדים עם צרכים מיוחדים.</li>
                                            <li> בני זוג מאותו מין אינם פסולים מלשמש כהורים מאמצים, אך נטייתם המינית תילקח בחשבון בעת ההחלטה על אישור האימוץ. לפרטים נוספים ראו ג בפורטל אימוץ.</li>
                                            <li>בני זוג יכולים לאמץ את ילדיהם הביולוגיים של בת/בן זוגם.</li>
                                            <li>קרובי משפחה של הילדים המאומצים (כגון דודים או סבים) יכולים לאמץ את הילדים אם בית המשפט הורה זאת.</li>
                                          </ul>
          </div>
      </li>
    </ul>
  </div>
</section>

  
                        <div className="col-md-6">
                            <h4>מקורות משפטיים ורשמיים</h4>
                             <h4 className="subheading">חקיקה ונהלים</h4>
                        <p  className="text-muted">
                       <Link to="https://www.nevo.co.il/law_html/Law01/055_075.htm#Seif3">חוק אימוץ ילדים</Link>
                        </p>
                        </div> */}
                    
    </div>);
}
export default Info;