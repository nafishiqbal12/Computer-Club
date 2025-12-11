# UITS Computer Club – Static Website

This project is a fully deployed **static website** for the **UITS Computer Club**, hosted on an **AWS EC2 Ubuntu server** using **Nginx** as the web server.  
The website showcases upcoming events, club activities, and membership information.

---

## 🚀 Project Overview

This website was built to provide students with easy access to event schedules, hackathons, programming contests, and club updates.  
It is deployed using a DevOps-style workflow:

- Source code stored on **GitHub**
- Pulled into an **EC2 Ubuntu server**
- Served using **Nginx**
- Secured using proper permissions and directory structure

---

## 🛠️ Tech Stack

| Component | Technology |
|----------|------------|
| Hosting | AWS EC2 (Ubuntu 22.04) |
| Web Server | Nginx |
| Version Control | Git & GitHub |
| Frontend | HTML, CSS, JavaScript |
| Deployment | Manual Git Pull to `/var/www/html` |

---

## 📦 Features

- ✔ Modern UI for club homepage  
- ✔ Hero section with call-to-action  
- ✔ Upcoming events with dates & seat counts  
- ✔ Navigation bar (Events, Members, Connect, Login)  
- ✔ Fully responsive layout  
- ✔ Live on AWS with Nginx  

---

## 📸 Screenshot

![Website Preview](screenshot.png)

*(Upload your screenshot as `screenshot.png` to GitHub for this to work)*

---

## 🧩 Project Structure

📂 Project Structure
- /var/www/html
- │── index.html
- │── css/
- │── js/
- └── assets/


---

## 🧑‍💻 Deployment Steps Used

1. **Update server**
   ```bash
   sudo apt update && sudo apt upgrade -y
2. **Install Nginx**
   ```bash
   sudo apt install nginx -y

3. **Clone GitHub Repo**
   ```bash
   cd /var/www/html
   sudo git clone https://github.com/yourusername/yourrepo.git


4. **Move website files**
   ```bash
   sudo mv yourrepo/* .

 5. **Set permissions**
    ```bash
    sudo chown -R www-data:www-data /var/www/html
    sudo chmod -R 755 /var/www/html

6. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx

🔗 Live Demo Link

http://YOUR_PUBLIC_IP
13.213.67.128

📬 Contact

For collaboration or suggestions, feel free to connect:
Nafish Iqbal – DevOps Engineer
GitHub: https://github.com/nafishiqbal12

LinkedIn: https://linkedin.com/in/nafishiqbal12
