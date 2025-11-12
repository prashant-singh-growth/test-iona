import React from 'react'
import SolutionBanner from '../components/Pages/SolutionPage/SolutionBanner'
import ResultSection from '../components/Pages/LandingPage/ResultSection'
import PainPointSection from '../components/Pages/SolutionPage/PainPointSection'
import ChallengesSection from '../components/Pages/SolutionPage/ChallengesSection'
import CompleteSolutionSection from '../components/Pages/SolutionPage/CompleteSolutionSection'

function SolutionPage() {
  return (
  <>
  <SolutionBanner/>
  <ResultSection headShow={false}/>
  <PainPointSection/>
  <ChallengesSection/>
  <CompleteSolutionSection/>
  </>
  )
}

export default SolutionPage