"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, Calendar, MapPin, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

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
                <a href="mailto:matheusbnas@gmail.com" className="contact-link">matheusbnas@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <Phone />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="https://api.whatsapp.com/send?phone=5521999999999" className="contact-link">+55 21 99999-9999</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <Calendar />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1990-01-01">January 01, 1990</time>
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
              <a href="https://www.linkedin.com/in/matheus-nascimento-b06b639b" className="social-link">
                <Linkedin />
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      )}
    </aside>
  );
}