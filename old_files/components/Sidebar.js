"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, Calendar, MapPin, Linkedin, ChevronDown, ChevronUp, Github } from 'lucide-react';

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className="sidebar" data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src="/images/foto_perfil.jpg" alt="Matheus Bernardes" width={80} height={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Matheus Bernardes">Matheus Bernardes</h1>
          <p className="title">Data Science | Machine Learning</p>
        </div>
        <button className="info_more-btn" onClick={() => setShowContacts(!showContacts)}>
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
          {showContacts ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      
      {showContacts && (
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <Mail />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:matheusbnas@gmail.com"  target="_blank" className="contact-link">matheusbnas@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <Phone />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="https://api.whatsapp.com/send?phone=5521994288152" target="_blank" className="contact-link">+55 21 99428-8152</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <Calendar />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1990-01-01">September 19, 1994</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <MapPin />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Rio de Janeiro, Brazil</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/matheusbnas/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/matheusbnas" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github />
              </a>
            </li>
            <li className="social-item">
              <a href="mailto:matheusbnas@gmail.com" className="social-link">
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}