PennController.ResetPrefix(null);
AddHost("https://www.clairemoorecantwell.org/expFiles/");
PennController.DebugOff();

PennController.ResetPrefix(null);
_AddStandardCommands(function(PennEngine){
    this.actions = {
        duration: function(resolve, duration){
            const nduration = Number(duration);
            if (isNaN(nduration) || nduration < 0)
                PennEngine.debug.error("Invalid duration for timer "+this.id+" (&quot;"+duration+"&quot;)");
            else
                this.duration = nduration;
            resolve();
        }
    }
});

Header(
// void
)
.log( "sonaID" , GetURLParameter("id") )

AddHost("https://www.clairemoorecantwell.org/expFiles/");

//Initate recorder 
InitiateRecorder("https://www.clairemoorecantwell.org/sp2/soundsaver.php")
    .label("init")
    
UploadRecordings("sendAsync", "noblock")

DebugOff(); 

// Sequence of the trials
// Sections are: welcome, soundtest, overall_instr, leapQ1, leapQ2, leapQ3,
Sequence ("init","soundtest")

// Welcome trial with consent form
newTrial("welcome",
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>").settings.css("font-size", "24")
        .center()
    ,
    newText("<p>University of California, Los Angeles</p>")
        .settings.css("font-size", "18")
        .center()
    ,
    newText("<p>CONSENT TO PARTICIPATE IN RESEARCH</p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>Onset cluster repair by second language speakers of English</p>")
        .italic()
        .center()
        .settings.css("font-size", "18")
    ,
    newText("<p>Dr. Claire Moore-Cantwell, from the Department of Linguistics at the University of California, Los Angeles (UCLA), and Dr. Connor Mayer, from the Department of Language Science at the University of California, Irvine (UCI), are conducting a research study.</p><p>You were selected as a possible participant in this study because you are a native speaker of Farsi, Mandarin, or Japanese, who speaks English as a second language.  Your participation in this research study is voluntary.</p>")
        .center()
        .settings.css("font-size", "18")
    ,
    newText("Why is this study being done?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>This study examines perception and production of English as a second language by native speakers of Farsi, Mandarin, or Japanese. By investigating how speakers’ native languages affect their perception and production of English and how closely linked their production and perception are, our study has important implications for second language learning and linguistic theory.  </p>")
        .settings.css("font-size", "18")
    ,
    newButton("continue","Next")
        .center()
        .print()
        .wait()
    ,
    getButton("continue").remove()
    ,
    
    newText("What will happen if I take part in this research study?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>If you volunteer to participate in this study, the researcher will ask you to do the following: (1) Complete a language background questionnaire, (2) Listen to and distinguish pairs of real words in English or fake words that sound like English, and (3) Read a series of words or passages in English aloud while being recorded.</p>")
        .settings.css("font-size", "18")
    ,
    newText("How long will I be in the research study?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>Participation will take a total of about an hour.</p>")
        .settings.css("font-size", "18")
    ,
    newText("Are there any potential risks or discomforts that I can expect from this study?").bold().settings.css("font-size", "24")
    ,
    newText("<p>There are no anticipated risks or discomforts.</p>")
        .settings.css("font-size", "18")
    ,
    newText("Are there any potential benefits if I participate?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>You will not directly benefit from your participation in the research. The results of the research may add to our understanding of the human voice, speech, and how second languages are learned.</p>")
        .settings.css("font-size", "18")
    ,
//      newButton("continue5","Next")
//        .center()
//        .print()
//        .wait()
//    ,
//    getButton("continue5").remove()
//    ,
//    newText("<p>What other choices do I have if I choose not to participate?<p>").bold().center().settings.css("font-size", "24")
//    ,
//    newText("<p>If you choose not to participate in this study, you may still receive credit for your course by choosing from a different study on SONA, or if you choose not to participate in any studies, you should contact your professor for alternative ways to receive credit.<p>")
//        .settings.css("font-size", "18")
//    ,
    newText("Will I be paid for participating?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>You will receive $15 US for participating in this study.</p>")
        .settings.css("font-size", "18")
    ,
    newButton("continue4","Next")
        .center()
        .print()
        .wait()
    ,
    getButton("continue4").remove()
    ,
    newText("Will information about me and my participation be kept confidential?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>If you are participating on Prolific, you will not be asked to supply any personal identifiable information. If you are participating in-person, a unique participant code will be assigned to you. The association of participant codes and your name and email address will be stored in an encrypted sheet and only experiment personnel will have access to the sheet. Your de-identified data may be used in future research by the research team.</p>")
        .settings.css("font-size", "18")
    ,
    newText("What are my rights if I take part in this study?")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>You can choose whether or not you want to be in this study, and you may withdraw your consent and discontinue participation at any time. Whatever decision you make, there will be no penalty to you, and no loss of benefits to which you were otherwise entitled. You may refuse to answer any questions that you do not want to answer and still remain in the study.</p>")
        .settings.css("font-size", "18")
    ,
    newText("Who can I contact if I have questions about this study?")
        .bold()
        .settings.css("font-size", "24")
    ,
    
    newText("<p><b>The research team:</b></p><p>If you have any questions, comments or concerns about the research, you can take as much time as you like to ask the researcher before you sign this form. If you have questions afterwards, please contact: Dr. Claire Moore-Cantwell, Department of Linguistics, UCLA (moore.cantwell@ucla.edu) or Dr. Connor Mayer, Department of Language Science, UCI (cjmayer@uci.edu).</p><p><b>UCLA Office of the Human Research Protection Program (OHRPP):</b></p><p>If you have questions about your rights as a research subject, or you have concerns or suggestions and you want to talk to someone other than the researchers, you may contact the UCLA Office of the Human Research Protection Program by phone: (310) 206-2040; by email: participants@research.ucla.edu or by mail: Box 951406, Los Angeles, CA 90095-1406.</p>")
        .settings.css("font-size", "18")
    ,
    newButton("continue1","Next")
        .center()
        .print()
        .wait()
    ,
    getButton("continue1").remove()
    ,    newText("Use of recordings")
        .bold()
        .settings.css("font-size", "24")
    ,
    newText("<p>Your voice will be recorded in this study, and we may want to use your recordings in presentations of the results of this study, such as at conferences or in web publication of the results.  Recordings will always be presented anonymously and will not be attached to your name or any other identifying information. </p><p> Please indicate whether you would like your recordings to be used for this purpose.  If you choose ‘No’, no-one besides the research team will hear or have access to your recordings.  Instead, only measurements taken from your recordings will be presented.</p>")
        .settings.css("font-size", "18")
    ,
    newDropDown("choice", "---Please select---")
        .settings.add("Yes","No")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
);


// Audio Check - import from stressprime
newTrial("soundtest",

   newText("part1","<p>Thanks!  Now, Let's test your sound.</p> <p>You will need to be able to hear clearly, and have a working microphone.</p> <p> We recommend using headphones, and as high-quality of a microphone as you have.  Please avoid using the built-in mic on ear buds if you can. </p><p>If you fail the soundtest, you may readjust your sound and restart the experiment by hitting the 'reload' button on your browser.</p><p>  For the test, you will see 8 words. Each word will flash on the screen for about 2 seconds. Please say the word when it appears. It moves through fast so don't click the button until you are ready!   Ready?</p>").print(),
   newButton("go","Let's go!").print().center().wait(),
   getButton("go").remove(),
   
    newText("canary","<p>canary</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("canary","audio")
        .record()
    ,
    newTimer("recording",2000)
        .start()
        .wait()
    ,
    getText("canary").remove()
    ,
    getMediaRecorder("canary").stop(),


    newText("hot","<p>hot</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("hot","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("hot").remove()
    ,
    getMediaRecorder("hot").stop(),
    
    newText("cryptic","<p>cryptic</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("cryptic","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("cryptic").remove()
    ,
    getMediaRecorder("cryptic").stop(),
    

    newText("moth","<p>moth</p>").settings.css("font-size","20px").center().print(),
    
    newMediaRecorder("moth","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("moth").remove()
    ,
    getMediaRecorder("moth").stop(),
    
    
    newText("cannery","<p>cannery</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("cannery","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("cannery").remove()
    ,
    getMediaRecorder("cannery").stop(),
    
    
    newText("moss","<p>moss</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("moss","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("moss").remove()
    ,
    getMediaRecorder("moss").stop(),

    
    
    newText("hopped","<p>hopped</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("hopped","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("hopped").remove()
    ,
    getMediaRecorder("hopped").stop(),
    
    

    newText("critic","<p>critic</p>").settings.css("font-size","20px").center().print(),
    newMediaRecorder("critic","audio")
        .record()
    ,
    getTimer("recording")
        .start()
        .wait()
    ,
    getText("critic").remove()
    ,
    getMediaRecorder("critic").stop(),
    
 

    getText('part1').remove(),
    
    // part 2 for sound test-- playback
    newText("part2","<p>Now, please listen to some of those recordings, and choose the word you heard:</p>").print(),
    newButton("play").center().print().wait(),
    getButton("play").remove(),
    
    getMediaRecorder("cannery")
        .play()
        .wait("playback")
    ,
    newVar("one"),
    newDropDown("one","")
        .add("moth","cannery","hot","hopped","critic","canary","moss","cryptic")
        .shuffle()
        .center()
        .print()
        .wait("first")
        .setVar("one")
    ,
    getDropDown("one").remove(),

    getMediaRecorder("moth")
        .play()
        .wait("playback")
    ,
    newVar("two"),
    newDropDown("two","")
        .add("moth","cannery","hot","hopped","critic","canary","moss","cryptic")
        .shuffle()
        .center()
        .print()
        .wait("first")
        .setVar("two")
    ,
    getDropDown("two").remove(),
    
    getMediaRecorder("hot")
        .play()
        .wait("playback")
    ,
    newVar("three"),
    newDropDown("three","")
        .add("moth","cannery","hot","hopped","critic","canary","moss","cryptic")
        .shuffle()
        .center()
        .print()
        .wait("first")
        .setVar("three")
    ,
    getDropDown("three").remove(),
    
    getMediaRecorder("cryptic")
        .play()
        .wait("playback")
    ,
    newVar("four"),
    newDropDown("four","")
        .add("moth","cannery","hot","hopped","critic","canary","moss","cryptic")
        .shuffle()
        .center()
        .print()
        .wait("first")
        .setVar("four")
    ,
    getDropDown("four").remove(),
    

    newVar("ncorrect",0),
    getVar("one")
        .test.is("cannery")
        .success(
            getVar('ncorrect')
                .set(v => v+1)
            )
    ,
    getVar("two")
        .test.is("moth")
        .success(
            getVar('ncorrect')
                .set(v => v+1)
            )
    ,
    getVar("three")
        .test.is("hot")
        .success(
            getVar('ncorrect')
                .set(v => v+1)
            )
    ,
    getVar("four")
        .test.is("cryptic")
        .success(
            getVar('ncorrect')
                .set(v => v+1)
            )
    ,
    
    
    
    newText("print")
        .center()
        .text(getVar("ncorrect")).print()
        .before(newText("You got ").print())
        .after(newText(" out of 4 correct.").print())
        .print()
    ,
    getVar("ncorrect")
        .test.is(v=>v<=2)
        .success(newText("<p>Sorry, you didn't pass the sound test.  Try adjusting your speakers and microphone and restarting the study again.</p><p> You can safely close this window.</p>").print().wait())
    ,

    newText("<p> You passed the sound test!</p>").print(),
    newButton("Continue to instructions")
        .print()
        .wait()
);

//Overall outline
newTrial("overall_instr",
    newText("study","<p>In this study, there are five parts:</p>")
    ,
    newText("questionnaire","<p> 1. Answer questions about your language background (3-5 minutes)</p>")
    ,
    newText("nw","<p> 2. Listen to and distinguish made-up words (5-10 minutes)</p>")
    ,
    newText("rw","<p> 3. Listen to and distinguish real English words (5-10 minutes)</p>")
    ,
    newText("wlist","<p> 4. Read words aloud (3-5 minutes)</p>")
    ,
    newText("para","<p> 5. Read a paragraph aloud (1-3 minutes)</p>")
    ,

    newText("BasicInfo", "<p><b>Before we start, please answer the following questions:</b></p>")
    ,
    newText("age", "What is your age?")
    ,
    newTextInput("age")
        .cssContainer({"margin-bottom":"1em"})
        .center()
    ,
    newText("gender", "What is your gender?")
    ,
    newDropDown("gender","")
        .add("Female","Male","Non-binary","Prefer not to say")
    ,
    newText("disability", "Do you have any vision problem, hearing impairment, language disability, or learning disability?")
    ,
    newTextInput("disability")
        .cssContainer({"margin-bottom":"1em"})
        .center()
    ,

    newCanvas("sectionsCanvas", 500, 540)
        .settings.add(0, 50, getText("study").print())
        .settings.add(0, 80, getText("questionnaire").print())
        .settings.add(0, 110, getText("nw").print())
        .settings.add(0, 140, getText("rw").print())
        .settings.add(0, 170, getText("wlist").print())
        .settings.add(0, 200, getText("para").print())
        .settings.add(0, 250, getText("BasicInfo").print())
        .settings.add(0, 300, getText("age").print())
        .settings.add(0, 330, getTextInput("age").print())
        .settings.add(0, 370, getText("gender").print())
        .settings.add(0, 410, getDropDown("gender").print().log())
        .settings.add(0, 450, getText("disability").print())
        .settings.add(0, 500, getTextInput("disability").print())
        .center()
        .print()
    ,
    
    newButton("Next", "Let's start!")
        .center()
        .print()
        .wait()
);

//Language questionnaire
//Native language (Farsi, Japanese, Mandarin)
newTrial("leapQ1",
    newText("LeapQ_instruction", "Part I. Language Background Questionnaire")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("lgname","<p>1. Please name <b>your native language</b>:</p>")
    ,
    newTextInput("lgname","")
        .lines(0)
        .size(200,20)
    ,
//    newText("thisIsMy","<p>This is my</p>"),
//    newDropDown("thisIsMy","")
//        .add("native language","second language","third language","fourth language","fifth language")
//    ,
    newText("ageWhenYou","<p><i> (1) Age when you...</i></p>"),
    newText("beganAq","<p>Began acquiring this language:</p>"),
    newText("becameFluent","<p>Became fluent in this language:</p>"),
    newText("beganReading","<p>Began reading in this language:</p>"),
    newText("fluentReading","<p>Became fluent reading in this language:</p>"),
    
    newTextInput("ageAq","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("ageFl","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("ageRd","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("flRd","0")
        .lines(0)
        .size(50,20)
    ,

    newText("pleaseList","<p><i>(2) Please list the number of years and months you spent in each language environment:</i></p>"),
    newText("countryEnv","<p> A country where this language is spoken</p>"),
    newText("familyEnv","<p>A family where the language is spoken</p>"),
    newText("schoolEnv","<p>A school and/or working environment where this language is spoken</p>"),

    newTextInput("countryEnvYrs","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("countryEnvMonths","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("familyEnvYrs","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("familyEnvMonths","0")
        .lines(0)
        .size(50,20)
    ,
    
    newTextInput("schoolEnvYrs","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("schoolEnvMonths","0")
        .lines(0)
        .size(50,20)
    ,
    
    newText("proficiency","<p><i>(3) Please select your level of <b>proficiency</b> in speaking, understanding, and reading in this language:</i></p>"),
    newText("speakingProf","<p><b><i>Speaking</i></b></p>"),
    newText("understandingSpoken","<p><b><i>Understanding spoken language</i></b></p>"),
    newText("readingProf","<p><b><i>Reading</i></b></p>"),
    
    
    newDropDown("speakingProf","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
    newDropDown("understandingSpoken","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
    newDropDown("readingProf","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
        

    newCanvas("questionCanvas", 500, 550)
        .settings.add(0, 0, getText("LeapQ_instruction").print())
        .settings.add(0, 80, getText("lgname").print())
        .settings.add(0, 120, getTextInput("lgname").print().log())
    //    .settings.add(0, 90, getText("thisIsMy").print())
    //    .settings.add(0, 110, getDropDown("thisIsMy").print().log())
        .settings.add(0, 160, getText("ageWhenYou").print())
        .settings.add(0, 180, getText("beganAq").print())
        .settings.add(0, 220, getTextInput("ageAq").print())
        .settings.add(0, 250, getText("becameFluent").print())
        .settings.add(0, 290, getTextInput("ageFl").print())
        .settings.add(0, 320, getText("beganReading").print())
        .settings.add(0, 360, getTextInput("ageRd").print())
        .settings.add(0, 390, getText("fluentReading").print())
        .settings.add(0, 430, getTextInput("flRd").print())
        .settings.add(0, 480, newButton("enter","Enter").print())
        
        .center()
        .print()
    ,

    getButton("enter")
        .wait()
        .remove()
    ,
    
    
    getCanvas("questionCanvas")
        .remove(getText("ageWhenYou"))
        .remove(getText("beganAq"))
        .remove(getText("becameFluent"))
        .remove(getText("beganReading"))
        .remove(getText("fluentReading"))
        
        .remove(getTextInput("ageAq"))
        .remove(getTextInput("ageFl"))
        .remove(getTextInput("ageRd"))
        .remove(getTextInput("flRd"))
        
        .settings.add(0, 160, getText("pleaseList").print())
        .settings.add(0, 200, getText("countryEnv"))
        .settings.add(0, 240, newText("Years").print())
        .settings.add(100, 240, newText("Months").print())
        .settings.add(0, 270, getTextInput("countryEnvYrs").print())
        .settings.add(100, 270, getTextInput("countryEnvMonths").print())

        .settings.add(0, 310, getText("familyEnv"))
        .settings.add(0, 350, newText("years2","Years").print())
        .settings.add(100, 350, newText("months2","Months").print())
        .settings.add(0, 380, getTextInput("familyEnvYrs").print())
        .settings.add(100, 380, getTextInput("familyEnvMonths").print())

        .settings.add(0, 420, getText("schoolEnv"))
        .settings.add(0, 460, newText("years3","Years").print())
        .settings.add(100, 460, newText("months3","Months").print())
        .settings.add(0, 490, getTextInput("schoolEnvYrs").print())
        .settings.add(100, 490, getTextInput("schoolEnvMonths").print())

        .settings.add(0, 520, getButton("enter","Enter").print())
    ,
    
        getButton("enter")
        .wait()
        .remove()
    ,
    
    getCanvas("questionCanvas")
        .remove(getText("pleaseList"))
        .remove(getText("countryEnv"))
        .remove(getText("Years"))
        .remove(getText("Months"))
        .remove(getText("familyEnv"))
        .remove(getText("schoolEnv"))
        .remove(getText("years2"))
        .remove(getText("months2"))
        .remove(getText("years3"))
        .remove(getText("months3"))
        .remove(getTextInput("countryEnvYrs"))
        .remove(getTextInput("countryEnvMonths"))
        .remove(getTextInput("familyEnvYrs"))
        .remove(getTextInput("familyEnvMonths"))
        .remove(getTextInput("schoolEnvYrs"))
        .remove(getTextInput("schoolEnvMonths"))

        .settings.add(0, 160, getText("proficiency").print())
        .settings.add(0, 200, getText("speakingProf").print())
        .settings.add(0, 240, getDropDown("speakingProf").print().log())
        
        .settings.add(0, 280, getText("understandingSpoken").print())
        .settings.add(0, 320, getDropDown("understandingSpoken").print().log())

        .settings.add(0, 360, getText("readingProf").print())
        .settings.add(0, 400, getDropDown("readingProf").print().log())


        .settings.add(0, 460, getButton("enter","Enter").print())
    ,
    
        getButton("enter")
        .wait()
        .remove()
);
//L2 English
newTrial("leapQ2",
    newText("LeapQ_instruction", "Part I. Language Background Questionnaire")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("lgname2","<p>2. Please assess your proficiency of <b>English</b></p>")
    ,
//    newTextInput("lgname","")
//        .lines(0)
//        .size(200,20)
//    ,
    newText("EngIsMy","<p>English is my</p>"),
    newDropDown("EngIsMy","")
        .add("native language","second language","third language","fourth language","fifth language")
    ,
    newText("ageWhenYou2","<p><i> (1) Age when you...</i></p>"),
    newText("beganAq2","<p>Began acquiring this language:</p>"),
    newText("becameFluent2","<p>Became fluent in this language:</p>"),
    newText("beganReading2","<p>Began reading in this language:</p>"),
    newText("fluentReading2","<p>Became fluent reading in this language:</p>"),
    
    newTextInput("ageAq2","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("ageFl2","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("ageRd2","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("flRd2","0")
        .lines(0)
        .size(50,20)
    ,

    newText("pleaseList2","<p><i>(2) Please list the number of years and months you spent in each language environment:</i></p>"),
    newText("countryEnv2","<p> A country where this language is spoken</p>"),
    newText("familyEnv2","<p>A family where the language is spoken</p>"),
    newText("schoolEnv2","<p>A school and/or working environment where this language is spoken</p>"),

    newTextInput("countryEnvYrs2","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("countryEnvMonths2","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("familyEnvYrs2","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("familyEnvMonths2","0")
        .lines(0)
        .size(50,20)
    ,
    
    newTextInput("schoolEnvYrs2","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("schoolEnvMonths2","0")
        .lines(0)
        .size(50,20)
    ,
    
    newText("proficiency2","<p><i>(3) Please select your level of <b>proficiency</b> in speaking, understanding, and reading in this language:</i></p>"),
    newText("speakingProf2","<p><b><i>Speaking</i></b></p>"),
    newText("understandingSpoken2","<p><b><i>Understanding spoken language</i></b></p>"),
    newText("readingProf2","<p><b><i>Reading</i></b></p>"),
    
    
    newDropDown("speakingProf2","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
    newDropDown("understandingSpoken2","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
    newDropDown("readingProf2","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
        

    newCanvas("questionCanvas2", 500, 550)
        .settings.add(0, 0, getText("LeapQ_instruction").print())
        .settings.add(0, 50, getText("lgname2").print())
        .settings.add(0, 80, getText("EngIsMy").print())
        .settings.add(0, 120, getDropDown("EngIsMy").print().log())
        .settings.add(0, 160, getText("ageWhenYou2").print())
        .settings.add(0, 180, getText("beganAq2").print())
        .settings.add(0, 220, getTextInput("ageAq2").print())
        .settings.add(0, 250, getText("becameFluent2").print())
        .settings.add(0, 290, getTextInput("ageFl2").print())
        .settings.add(0, 320, getText("beganReading2").print())
        .settings.add(0, 360, getTextInput("ageRd2").print())
        .settings.add(0, 390, getText("fluentReading2").print())
        .settings.add(0, 430, getTextInput("flRd2").print())
        .settings.add(0, 480, newButton("enter","Enter").print())
        
        .center()
        .print()
    ,

    getButton("enter")
        .wait()
        .remove()
    ,
    
    
    getCanvas("questionCanvas2")
        .remove(getText("ageWhenYou2"))
        .remove(getText("beganAq2"))
        .remove(getText("becameFluent2"))
        .remove(getText("beganReading2"))
        .remove(getText("fluentReading2"))
        
        .remove(getTextInput("ageAq2"))
        .remove(getTextInput("ageFl2"))
        .remove(getTextInput("ageRd2"))
        .remove(getTextInput("flRd2"))
        
        .settings.add(0, 160, getText("pleaseList2").print())
        .settings.add(0, 200, getText("countryEnv2"))
        .settings.add(0, 240, newText("Years").print())
        .settings.add(100, 240, newText("Months").print())
        .settings.add(0, 270, getTextInput("countryEnvYrs2").print())
        .settings.add(100, 270, getTextInput("countryEnvMonths2").print())

        .settings.add(0, 310, getText("familyEnv2"))
        .settings.add(0, 350, newText("years22","Years").print())
        .settings.add(100, 350, newText("months22","Months").print())
        .settings.add(0, 380, getTextInput("familyEnvYrs2").print())
        .settings.add(100, 380, getTextInput("familyEnvMonths2").print())

        .settings.add(0, 420, getText("schoolEnv2"))
        .settings.add(0, 460, newText("years32","Years").print())
        .settings.add(100, 460, newText("months32","Months").print())
        .settings.add(0, 490, getTextInput("schoolEnvYrs2").print())
        .settings.add(100, 490, getTextInput("schoolEnvMonths2").print())

        .settings.add(0, 520, getButton("enter","Enter").print())
    ,
    
        getButton("enter")
        .wait()
        .remove()
    ,
    
    getCanvas("questionCanvas2")
        .remove(getText("pleaseList2"))
        .remove(getText("countryEnv2"))
        .remove(getText("Years"))
        .remove(getText("Months"))
        .remove(getText("familyEnv2"))
        .remove(getText("schoolEnv2"))
        .remove(getText("years22"))
        .remove(getText("months22"))
        .remove(getText("years32"))
        .remove(getText("months32"))
        .remove(getTextInput("countryEnvYrs2"))
        .remove(getTextInput("countryEnvMonths2"))
        .remove(getTextInput("familyEnvYrs2"))
        .remove(getTextInput("familyEnvMonths2"))
        .remove(getTextInput("schoolEnvYrs2"))
        .remove(getTextInput("schoolEnvMonths2"))

        .settings.add(0, 160, getText("proficiency2").print())
        .settings.add(0, 200, getText("speakingProf2").print())
        .settings.add(0, 240, getDropDown("speakingProf2").print().log())
        
        .settings.add(0, 280, getText("understandingSpoken2").print())
        .settings.add(0, 320, getDropDown("understandingSpoken2").print().log())

        .settings.add(0, 360, getText("readingProf2").print())
        .settings.add(0, 400, getDropDown("readingProf2").print().log())


        .settings.add(0, 460, getButton("enter","Enter").print())
    ,
    
        getButton("enter")
        .wait()
        .remove()
);
//Other language(s)
newTrial("leapQ3",
    newText("LeapQ_instruction", "Part I. Language Background Questionnaire")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("lgname3","<p>3. If you speak a third language, please name it below; If not, please leave everything blank in this session</p>")
    ,
    newTextInput("lgname3","")
        .lines(0)
        .size(200,20)
    ,
//    newText("thisIsMy","<p>This is my</p>"),
//    newDropDown("thisIsMy","")
//        .add("native language","second language","third language","fourth language","fifth language")
//    ,
    newText("ageWhenYou3","<p><i> (1) Age when you...</i></p>"),
    newText("beganAq3","<p>Began acquiring this language:</p>"),
    newText("becameFluent3","<p>Became fluent in this language:</p>"),
    newText("beganReading3","<p>Began reading in this language:</p>"),
    newText("fluentReading3","<p>Became fluent reading in this language:</p>"),
    
    newTextInput("ageAq3","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("ageFl3","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("ageRd3","0")
        .lines(0)
        .size(50,20)
    ,
    newTextInput("flRd3","0")
        .lines(0)
        .size(50,20)
    ,

    newText("pleaseList3","<p><i>(2) Please list the number of years and months you spent in each language environment:</i></p>"),
    newText("countryEnv3","<p> A country where this language is spoken</p>"),
    newText("familyEnv3","<p>A family where the language is spoken</p>"),
    newText("schoolEnv3","<p>A school and/or working environment where this language is spoken</p>"),

    newTextInput("countryEnvYrs3","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("countryEnvMonths3","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("familyEnvYrs3","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("familyEnvMonths3","0")
        .lines(0)
        .size(50,20)
    ,
    
    newTextInput("schoolEnvYrs3","0")
        .lines(0)
        .size(50,20)
    ,

    newTextInput("schoolEnvMonths3","0")
        .lines(0)
        .size(50,20)
    ,
    
    newText("proficiency3","<p><i>(3) Please select your level of <b>proficiency</b> in speaking, understanding, and reading in this language:</i></p>"),
    newText("speakingProf3","<p><b><i>Speaking</i></b></p>"),
    newText("understandingSpoken3","<p><b><i>Understanding spoken language</i></b></p>"),
    newText("readingProf3","<p><b><i>Reading</i></b></p>"),
    
    
    newDropDown("speakingProf3","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
    newDropDown("understandingSpoken3","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
    newDropDown("readingProf3","")
        .add("0. None","1. Very low","2. Low","3. Fair","4. Slightly less than adequate","5. Adequate","6. Slightly more than adequate","7. Good","8. Very good","9. Excellent","10. Perfect"),
        

    newCanvas("questionCanvas3", 500, 550)
        .settings.add(0, 0, getText("LeapQ_instruction").print())
        .settings.add(0, 50, getText("lgname3").print())
        .settings.add(0, 100, getTextInput("lgname3").print().log())
     //   .settings.add(0, 80, getText("thisIsMy3").print())
     //   .settings.add(0, 120, getDropDown("thisIsMy3").print().log())
        .settings.add(0, 160, getText("ageWhenYou3").print())
        .settings.add(0, 180, getText("beganAq3").print())
        .settings.add(0, 220, getTextInput("ageAq3").print())
        .settings.add(0, 250, getText("becameFluent3").print())
        .settings.add(0, 290, getTextInput("ageFl3").print())
        .settings.add(0, 320, getText("beganReading3").print())
        .settings.add(0, 360, getTextInput("ageRd3").print())
        .settings.add(0, 390, getText("fluentReading3").print())
        .settings.add(0, 430, getTextInput("flRd3").print())
        .settings.add(0, 480, newButton("enter","Enter").print())
        
        .center()
        .print()
    ,

    getButton("enter")
        .wait()
        .remove()
    ,
    
    
    getCanvas("questionCanvas3")
        .remove(getText("ageWhenYou3"))
        .remove(getText("beganAq3"))
        .remove(getText("becameFluent3"))
        .remove(getText("beganReading3"))
        .remove(getText("fluentReading3"))
        
        .remove(getTextInput("ageAq3"))
        .remove(getTextInput("ageFl3"))
        .remove(getTextInput("ageRd3"))
        .remove(getTextInput("flRd3"))
        
        .settings.add(0, 160, getText("pleaseList3").print())
        .settings.add(0, 200, getText("countryEnv3"))
        .settings.add(0, 240, newText("Years").print())
        .settings.add(100, 240, newText("Months").print())
        .settings.add(0, 270, getTextInput("countryEnvYrs3").print())
        .settings.add(100, 270, getTextInput("countryEnvMonths3").print())

        .settings.add(0, 310, getText("familyEnv3"))
        .settings.add(0, 350, newText("years23","Years").print())
        .settings.add(100, 350, newText("months23","Months").print())
        .settings.add(0, 380, getTextInput("familyEnvYrs3").print())
        .settings.add(100, 380, getTextInput("familyEnvMonths3").print())

        .settings.add(0, 420, getText("schoolEnv3"))
        .settings.add(0, 460, newText("years33","Years").print())
        .settings.add(100, 460, newText("months33","Months").print())
        .settings.add(0, 490, getTextInput("schoolEnvYrs3").print())
        .settings.add(100, 490, getTextInput("schoolEnvMonths3").print())

        .settings.add(0, 520, getButton("enter","Enter").print())
    ,
    
        getButton("enter")
        .wait()
        .remove()
    ,
    
    getCanvas("questionCanvas3")
        .remove(getText("pleaseList3"))
        .remove(getText("countryEnv3"))
        .remove(getText("Years"))
        .remove(getText("Months"))
        .remove(getText("familyEnv3"))
        .remove(getText("schoolEnv3"))
        .remove(getText("years23"))
        .remove(getText("months23"))
        .remove(getText("years33"))
        .remove(getText("months33"))
        .remove(getTextInput("countryEnvYrs3"))
        .remove(getTextInput("countryEnvMonths3"))
        .remove(getTextInput("familyEnvYrs3"))
        .remove(getTextInput("familyEnvMonths3"))
        .remove(getTextInput("schoolEnvYrs3"))
        .remove(getTextInput("schoolEnvMonths3"))

        .settings.add(0, 160, getText("proficiency3").print())
        .settings.add(0, 200, getText("speakingProf3").print())
        .settings.add(0, 240, getDropDown("speakingProf3").print().log())
        
        .settings.add(0, 280, getText("understandingSpoken3").print())
        .settings.add(0, 320, getDropDown("understandingSpoken3").print().log())

        .settings.add(0, 360, getText("readingProf3").print())
        .settings.add(0, 400, getDropDown("readingProf3").print().log())


        .settings.add(0, 460, getButton("enter","Enter").print())
    ,
    
        getButton("enter")
        .wait()
        .remove()
);

// Nonword discrimination instructions
newTrial("nw_discrim_instr",
    newText("<p>In this section, you will listen to two different voices pronounce names of made-up objects. <p> We’d like you to tell us whether the two voices said the same name for the object or not. </p>")
        .center()
        .print()
    ,
    newText("<p>Here is an example where they said the same word:</p>")
        .center()
        .print()
    ,
    newImage("example1image", "https://www.clairemoorecantwell.org/expFiles/image_freg.jpg")
        .size(300, 300)
        .center()
        .print()
    ,
    newButton("continue", "Listen")
        .center()
        .print()
        .wait()
    ,
    getButton("continue").remove()
    ,
    newAudio("audio1", "https://www.clairemoorecantwell.org/expFiles/boo-feg2.wav")
        .play()
        .wait()
        .log()
    ,
    newAudio("audio2", "https://www.clairemoorecantwell.org/expFiles/tee-feg2.wav")
        .play()
        .wait()
        .log()
    ,
    newButton("next", "Next")
        .center()
        .print()
        .wait()
);

newTrial("demo1",
    newText("<p>Let us practice with a demo. Look at this picture:</p>")
        .print()
    ,
    newButton("continue", "Next")
        .center()
        .print()
        .wait()
    ,
    getButton("continue").remove()
    ,
    newText("<p>What is this object?</p>")
        .print()
    ,
    newAudio("audio1", "https://www.clairemoorecantwell.org/expFiles/boo-spawl1.wav")
        .play()
    ,
    newAudio("audio2", "https://www.clairemoorecantwell.org/expFiles/tee-Espawl2.wav")
        .play()
    ,
    newText("<p>Listen to the two audios</p>")
        .print()
    ,
    newText("<p>They are the same or different?</p>")
        .print()
    ,
    newCanvas("choicesCanvas", 800, 50)
        .settings.add(150, 0, newButton("chooseSame", "Same").print())
        .settings.add(550, 0, newButton("chooseDifferent", "Different").print())
        .print()
    ,
    newSelector("choice")
        .settings.add(getButton("chooseSame"), getButton("chooseDifferent"))
        .wait()
    ,
    newButton("next", "Next")
        .center()
        .print()
        .wait()
);

// Block 1 nonword discrimination
Template( "block1.csv" ,
    row => newTrial( "NW_block1" ,
        oneFirst = (Math.random()>=0.5)
        ,
        newImage("block1Image", "https://www.clairemoorecantwell.org/expFiles/image_" + row.item + ".jpg")
            .size(300, 300)
            .center()
            .print()
        ,
        newButton("continue", "Listen")
            .center()
            .print()
            .wait()
        ,
        getButton("continue").remove()
        ,

        newAudio("audio1", "https://www.clairemoorecantwell.org/expFiles/" + row.corr_file)
        ,
        newAudio("audio2", "https://www.clairemoorecantwell.org/expFiles/"+ row.comparison_file)
        ,
        getAudio(oneFirst?"audio1":"audio2")
            .play()
            .wait()
            .log()
        ,

        getAudio(oneFirst?"audio2":"audio1")
            .play()
            .wait()
            .log()
        ,


        newText("<p>Did they say the same word?</p>")
            .center()
            .print()
        ,
        newCanvas("choicesCanvas", 800, 50)
            .settings.add(200, 0, newButton("chooseSame", "Same word").print().log())
            .settings.add(500, 0, newButton("chooseDifferent", "Different words").print().log())
            .center()
            .print()
        ,
        newSelector("choice")
            .settings.add(getButton("chooseSame"), getButton("chooseDifferent"))
            .wait()
            .log()
        ,
        newButton("next", "Next")
            .center()
            .print()
            .wait()
    )
);

// Block 2 nonword discrimination (no transition needed)
Template( "block2.csv" ,
    row => newTrial( "NW_block2" ,
        oneFirst = (Math.random()>=0.5)
        ,
        newImage("block1Image", "https://www.clairemoorecantwell.org/expFiles/image_" + row.item + ".jpg")
            .size(300, 300)
            .center()
            .print()
        ,
        newButton("continue", "Listen")
            .center()
            .print()
            .wait()
        ,
        getButton("continue").remove()
        ,

        newAudio("audio1", "https://www.clairemoorecantwell.org/expFiles/" + row.corr_file)
        ,
        newAudio("audio2", "https://www.clairemoorecantwell.org/expFiles/"+ row.comparison_file)
        ,
        getAudio(oneFirst?"audio1":"audio2")
            .play()
            .wait()
            .log()
        ,

        getAudio(oneFirst?"audio2":"audio1")
            .play()
            .wait()
            .log()
        ,

        newText("<p>Did they say the same word?</p>")
            .center()
            .print()
        ,
        newCanvas("choicesCanvas", 800, 50)
            .settings.add(200, 0, newButton("chooseSame", "Same word").print().log())
            .settings.add(500, 0, newButton("chooseDifferent", "Different words").print().log())
            .center()
            .print()
        ,
        newSelector("choice")
            .settings.add(getButton("chooseSame"), getButton("chooseDifferent"))
            .wait()
            .log()
        ,
        newButton("next", "Next")
            .center()
            .print()
            .wait()
    )
);


// Word List reading task
Template( "wordlist.csv" ,
    row => newTrial( "wordlist_reading" ,

   newText("instructions", "<p>Click 'Start Recording' to begin.</p>")
       .settings.css("font-size", "20px")
       .center()
       .print()
   ,
      newText("word", row.realword)
       .settings.css("font-size", "20px")
       .center()
       .print()
   ,
   newButton("start", "Start Recording")
       .center()
       .print()
       .wait()
   ,
   newMediaRecorder("record", "audio") 
       .log()
       .record()
   ,
    
    newButton("continue", "Continue")
        .center()
        .print()
        .callback(newTimer("buffer",500).start().wait(),getTimer("recording").stop(),getMediaRecorder("record").stop())
    ,
    
    newTimer("recording", 5000)
        .start()
        .wait()
    ,
   //newTimer("countdown", 300000) // 5 minutes countdown (300,000 ms)
    //   .callback(function(){
    //       let timeRemaining = getTimer("countdown").settings.remaining();
    //       let minutes = Math.floor(timeRemaining / 60000);
    //       let seconds = Math.floor((timeRemaining % 60000) / 1000);
    //       let display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //       getText("timer").settings.text(display); // Update the timer display
    //   })
    //   .start()
    //   .wait()
   //,

   getText("instructions").remove() 
));

// Nonword reading task
Template( "wordlist.csv" ,
    row => newTrial( "nonwordlist_reading" ,

   newText("instructions", "<p>Click 'Start Recording' to begin.</p>")
       .settings.css("font-size", "20px")
       .center()
       .print()
   ,
      newText("word", row.nonword)
       .settings.css("font-size", "20px")
       .center()
       .print()
   ,
   newButton("start", "Start Recording")
       .center()
       .print()
       .wait()
   ,
   newMediaRecorder("record", "audio") 
       .log()
       .record()
   ,
    
    newButton("continue", "Continue")
        .center()
        .print()
        .callback(newTimer("buffer",500).start().wait(),getTimer("recording").stop(),getMediaRecorder("record").stop())
    ,
    
    newTimer("recording", 5000)
        .start()
        .wait()
    ,

   getText("instructions").remove() 
));



// Passage Reading 
newTrial("passage_reading",

    newText("instructions", "<p>Please read the following passage aloud. You will be recorded during this task. When you are ready, click 'Start Recording' to begin. The timer will count down from 10 minutes. When you finish reading, click 'Stop Recording'.</p>")
        .settings.css("font-size", "20px")
        .center()
        .print()
    ,
    //newText("timer", "10:00") // Timer display initialized to 10 minutes
    //    .settings.css("font-size", "24px")
    //    .center()
    //    .print()
    //    .settings.css("margin-top", "20px")
    //,
    newText("passage", 
    `<p>On a clear Friday morning, Sarah and her best friend Mia decided to smuggle a picnic into a special 
    place they knew in the forest. They wore warm clothing because they were in the middle of a cold snap. 
    Sarah carried a small plastic umbrella in her pocket. Mia found a slender sculpture of a bird buried under 
    a pile of leaves, while Sarah found a tire swing that someone had built. Sarah smiled at how the cold 
    made her skin tingle. As they laughed, they noticed a swallow flutter by overhead. They spoke softly, not 
    wanting to disturb it. After their fun, they decided to snuggle up by the river bank and rest. Mia shut her 
    eyes and soon went to sleep, while Sarah watched the leaves fall gently to the forest floor.</p>`)
        .settings.css("font-size", "18px")
        .center()
        .print()
    ,
    // newButton
    // recording start
    // timer start
    // stop recording button
    //   callback( stops timer)

    // start recording button
    newButton("start", "Start Recording")
        .center()
        .print()
        .wait()
    ,
    
    newMediaRecorder("record","audio")
        .record()
        .log()
    ,   
    
    newButton("stop", "Stop Recording")
        .center()
        .print()
        .callback(newTimer("buffer",500).start().wait(),getTimer("recording").stop(),getMediaRecorder("record").stop())
    ,
    
    newTimer("recording", 300000)
        .start()
        .wait()
    ,
    
    //newButton("start", "Start Recording")
    //    .center()
    //    .print()
    //    .wait()
    //    .callback(
    //        newMediaRecorder("passage_reading", "audio").record().log(), // Start recording and log data
    //        (function startCountdown(duration, display) {
    //           let timer = duration;
    //            let interval = setInterval(function() {
    //                let minutes = Math.floor(timer / 60);
    //                let seconds = timer % 60;
                    
                    // Update the timer display
    //                display.settings.text(
    //                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    //                );
                    
                    // Decrement the timer
    //                if (--timer < 0) {
    //                    clearInterval(interval);
    //                    getMediaRecorder("passage_reading").stop();
    //                }
    //            }, 1000); // Update every second
    //        })(600, getText("timer")) // 600 seconds = 10 minutes
    //    )
    //,
    //newButton("stop", "Stop Recording")
    //    .center()
    //    .print()
    //    .wait()
    //    .callback(
    //        function(){
    //            clearInterval(interval); // Stop the interval for the timer
    //            getMediaRecorder("passage_reading").stop(); // Stop recording
    //        }
    //    )
    //,
    newButton("continue", "Continue")
        .center()
        .print()
        .wait()
);



// Real Word Acceptability Task - Block 1
Template("Realblock1.csv",
    row => newTrial("RW_block1",
        oneFirst = (Math.random() >= 0.5),  // Randomize audio playback order
        newImage("Realblock1Image", "https://www.clairemoorecantwell.org/expFiles/image_" + row.word + ".jpg")
            .size(300, 300)
            .center()
            .print()
        ,
        newButton("continue", "Listen")
            .center()
            .print()
            .wait()
        ,
        getButton("continue").remove()
        ,

        // Using corr_file and comparison_file for the audio playback
        newAudio("audio1", "https://www.clairemoorecantwell.org/expFiles/" + row.corr_file),
        newAudio("audio2", "https://www.clairemoorecantwell.org/expFiles/" + row.comparison_file),
        getAudio(oneFirst ? "audio1" : "audio2")
            .play()
            .wait()
            .log()
        ,

        getAudio(oneFirst ? "audio2" : "audio1")
            .play()
            .wait()
            .log()
        ,

        // The question for real word acceptability
        newText("<p>Is the pronunciation acceptable?</p>")
            .center()
            .print()
        ,
        newCanvas("choicesCanvas", 800, 50)
            .settings.add(200, 0, newButton("chooseAcceptable", "Acceptable").print().log())
            .settings.add(500, 0, newButton("chooseUnacceptable", "Unacceptable").print().log())
            .center()
            .print()
        ,
        newSelector("choice")
            .settings.add(getButton("chooseAcceptable"), getButton("chooseUnacceptable"))
            .wait()
            .log()
        ,
        newButton("next", "Next")
            .center()
            .print()
            .wait()
    )
);

// Real Word Acceptability Task - Block 2
Template("Realblock2.csv",
    row => newTrial("RW_block2",
        oneFirst = (Math.random() >= 0.5),  // Randomize audio playback order
        newImage("Realblock2Image", "https://www.clairemoorecantwell.org/expFiles/image_" + row.word + ".jpg")
            .size(300, 300)
            .center()
            .print()
        ,
        newButton("continue", "Listen")
            .center()
            .print()
            .wait()
        ,
        getButton("continue").remove()
        ,

        // Using corr_file and comparison_file for the audio playback
        newAudio("audio1", "https://www.clairemoorecantwell.org/expFiles/" + row.corr_file),
        newAudio("audio2", "https://www.clairemoorecantwell.org/expFiles/" + row.comparison_file),
        getAudio(oneFirst ? "audio1" : "audio2")
            .play()
            .wait()
            .log()
        ,

        getAudio(oneFirst ? "audio2" : "audio1")
            .play()
            .wait()
            .log()
        ,

        // The question for real word acceptability
        newText("<p>Is the pronunciation acceptable?</p>")
            .center()
            .print()
        ,
        newCanvas("choicesCanvas", 800, 50)
            .settings.add(200, 0, newButton("chooseAcceptable", "Acceptable").print().log())
            .settings.add(500, 0, newButton("chooseUnacceptable", "Unacceptable").print().log())
            .center()
            .print()
        ,
        newSelector("choice")
            .settings.add(getButton("chooseAcceptable"), getButton("chooseUnacceptable"))
            .wait()
            .log()
        ,
        newButton("next", "Next")
            .center()
            .print()
            .wait()
    )
);




// End Trial
newTrial("end",
    newText("<p>Thank you for your participation!</p>").print(),
    newText("<p>You can safely close this window.</p>").print(),
    newButton("void").wait()
);


