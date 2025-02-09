"use client"
import { useRouter } from 'next/navigation'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import LandingPageComponent from '@/components/landing-page/LandingPageComponent'
import { companySettingService } from '@/services/companySettingService'
import { useEffect, useState } from 'react'

export default function Hero() {
  const router = useRouter();
      const [loading, setLoading] = useState(true);
      const [slides, setSlides] = useState([]);
      const [fetchedAboutUs, setFetchedAboutUs] = useState(null);
  
      const fetchSlides = async () => {
          try {
              const response = await companySettingService.getAboutUs();
              if (response.status === 200) {
                  setSlides(response?.data?.landing);
                  setFetchedAboutUs(response?.data?.about)
              }
              return response;
          } catch (error) {
              toast.error('Error occured while fetching data')
          } finally {
              setLoading(false);
          }
      }
      useEffect(() => {
          // setTimeout(() => {
          fetchSlides();
          // }, 1000);
      }, []);
  
  return (
    <div className="h-full">
      <LandingPageComponent fetchSlides={fetchSlides} slides={slides} loading={loading} />

      <About />
      <Services />
      <Contact />
    </div>
  )
}