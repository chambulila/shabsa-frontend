"use client"
import LandingPageComponent from '@/components/landing-page/LandingPageComponent'
import { companySettingService } from '@/services/companySettingService';
import React, { useEffect, useState } from 'react'

export default function page() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);

  const fetchSlides = async () => {
    try {
      const response = await companySettingService.getAboutUs();
      if (response.status === 200) {
        setSlides(response?.data?.landing);
      }
      return response;
    } catch (error) {
      toast.error('Error occured while fetching data')
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setMounted(true);
    fetchSlides();
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <LandingPageComponent slides={slides} fetchSlides={fetchSlides} loading={loading} />
  )
}
