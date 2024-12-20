# Virtual Mentorship Nexus: Empowering University Students through an Online Mentoring System

## 1. Abstract

Mentoring is a traditional method of communication between experienced professionals and less-experienced individuals. The education sector has long recognized it as an effective tool, and with the rise of new technologies, online mentoring (e-mentoring) has emerged. Unlike face-to-face interactions, an Online Mentoring System (OMS) uses asynchronous, electronic communication to connect mentors and mentees in a virtual environment. The OMS, based on a Client-Server model, streamlines data and platforms, saving time for users. E-mentoring aims to enhance student performance by helping mentors address student issues more efficiently. Mentees can approach mentors with concerns, and mentors can focus on specific needs, even assigning specialized support, such as mental health counselors, when necessary.

<br>

## 2. Proposed Architecture
Our proposed online educational mentoring system consists roles such as Admin, Mentors, Specialized Mental Health Counselors and Mentees. The Admin is responsible for adding Mentors into the system, assigning the Mentors to the Mentees and providing login credentials to Mentors. One Mentor can be assigned to at most 7 Mentees. Each Mentor has attributes namely Subject, Mentor ID, Password, Email ID, Mobile No and DOB. He can see the final list of Mentees assigned to him and can schedule meetings with them. The meetings can be conducted on one-on-one basis as well as in groups. Mentors are of two types: General Mentor and Specialized Mental Health Mentor. The General mentor asks the admin to assign a Mental Health Mentor to a Mentee if necessary. The Admin then assigns a Counselor to the Mentee. The Mentees are registered by the Admin. After the registration, the Admin will provide login credentials to the Mentees. We store each Mentee’s name, Email Id, DOB, University, Mentee Id, Phone No, Username, Password. A Mentee can ask for a one-on-one meeting session with his Mentor through the portal.

<br>

## 3. Tools and Technologies

### 3.1. Backend:
- MYSQL
- Express.js
- EJS3

### 3.2 Frontend:
- HTML 
- CSS
- Bootstrap
- Javascript

<br>

## 4. Database Design
![db-design](https://github.com/user-attachments/assets/c6a45685-4134-4b0c-b1cc-d13414f62b13)

<br>

## 5. Database Schema
![db-schema-1](https://github.com/user-attachments/assets/893d45e0-58eb-44ff-bad2-b3e82bbd816b)
![db-schema-2](https://github.com/user-attachments/assets/30105a88-a7a5-4997-be91-3b51668d5c70)
![db-schema-3](https://github.com/user-attachments/assets/7e0215a8-4113-4526-875d-3749da96ad6b)

<br>

## 6. Relational Database Design
![relational-db-design](https://github.com/user-attachments/assets/a454ace3-80ce-4a63-9c4a-e8a1171139d7)

<br>

## 7. Frontend GUI
![frontend-gui](https://github.com/user-attachments/assets/a348868e-221a-4ff4-8493-6a57c4cf1999)
![register](https://github.com/user-attachments/assets/5471d1a9-df0d-436c-9a48-e51afba97418)

![mentee-login](https://github.com/user-attachments/assets/739c6025-45ce-4357-82d8-419712c8c49d)
![mentee-dashboard](https://github.com/user-attachments/assets/a725e6c5-7842-4e04-8d1e-ade7cf39a40f)
![mentor-login](https://github.com/user-attachments/assets/d3e8a5bf-c50c-4dea-b8cd-c03144b7c7ed)
![mentor-dashboard-2](https://github.com/user-attachments/assets/d5688b41-4f8f-430d-aa8e-88e45e50d031)

![admin-login](https://github.com/user-attachments/assets/b2d240cb-55d5-4416-8b90-3223a1c4a154)
![admin-dashboard-1](https://github.com/user-attachments/assets/8c0eb0be-65b9-4c6c-85e8-06608d7960d5)
![admin-dashboard-2](https://github.com/user-attachments/assets/b496d26f-26d4-49db-946b-f6ab949fb615)
![admin-dashboard-3](https://github.com/user-attachments/assets/aa7b83a1-32ea-4dc7-a576-856116dd7116)
![admin-dashboard-4](https://github.com/user-attachments/assets/8d3ba6ae-8892-4f9f-b6c1-44f230557115)
