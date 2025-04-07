import speech_recognition as sr
import datetime
from jiwer import wer

recognizer = sr.Recognizer()
microphone = sr.Microphone()

# print(dir(recognizer))

with sr.AudioFile("./Humendra.wav") as source:
    recognizer.adjust_for_ambient_noise(source)
    audio1 = recognizer.record(source)

with sr.AudioFile("./akasha.wav") as source:
    recognizer.adjust_for_ambient_noise(source)
    audio2 = recognizer.record(source)
    
print(type(audio1))



# with microphone as source:
#     recognizer.adjust_for_ambient_noise(source)
#     audio = recognizer.listen(source)

original_text = "I would like to formally raise a grievance regarding the ongoing issues I have been facing in my current environment which have started to significantly impact both my work performance and personal well being Despite multiple attempts to address these concerns informally the lack of proper response or resolution has left me with no other option but to document them through this formal complaint Firstly I have experienced repeated instances of miscommunication and lack of clarity in task delegation Often deadlines and expectations are not clearly defined which leads to confusion and ultimately results in undue pressure and blame This not only affects my confidence but also creates a stressful atmosphere where mistakes become more likely Secondly I feel that there has been a consistent lack of recognition for my efforts While I understand that praise should be earned I have gone above and beyond on several occasions without any acknowledgment whereas others are regularly recognized for similar or even lesser contributions This inequality has become deeply demotivating Additionally I have noticed an imbalance in workload distribution I am frequently assigned tasks that extend beyond my role while others in similar positions have a noticeably lighter load This has led to burnout and frustration on my end I believe in fairness open communication and mutual respect I hope that by bringing this grievance forward, steps can be taken to ensure a healthier more transparent and respectful working environment for everyone involved Thank you for taking the time to hear my concerns"




time = datetime.datetime.now()
converted = recognizer.recognize_sphinx(audio2)
print("Time taken by recognize_sphinx to convert Speech to Text", datetime.datetime.now() - time)
error = wer(original_text, converted)
print(f"WER: {100 - error * 100:.2f}% \n\n")


time = datetime.datetime.now()
converted = recognizer.recognize_google(audio2)
print("Time taken by recognize_google to convert Speech to Text", datetime.datetime.now() - time)
error = wer(original_text, converted)
print(f"WER: {100 - error * 100:.2f}% \n\n")


time = datetime.datetime.now()
converted = recognizer.recognize_faster_whisper(audio2)
print("Time taken by recognize_faster_whisper to convert Speech to Text", datetime.datetime.now() - time)
error = wer(original_text, converted)
print(f"WER: {100 - error * 100:.2f}% \n\n")


# time = datetime.datetime.now()
# print(recognizer.recognize_wit(audio, key="55CMZLYPMVRA2H5CVOXIKX6R676M2ADV")) # multi language not support 
# print("Time taken by recognize_wit to convert Speech to Text", datetime.datetime.now() - time ,"\n\n")
