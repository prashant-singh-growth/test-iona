

import SingleSolutionBanner from '../../components/Pages/SolutionPage/SingleSolutionPage/SingleSolutionBanner'
import StateCard from '../../components/Pages/SolutionPage/SingleSolutionPage/StateCard'
import SolutionDetailsCard from '../../components/Pages/SolutionPage/SingleSolutionPage/SolutionDetailsCard'
import PlatformCapabilitiesSection from '../../components/Pages/SolutionPage/SingleSolutionPage/PlatformCapabilitiesSection'
import HowThisWorkSection from '../../components/Pages/SolutionPage/SingleSolutionPage/HowThisWorkSection'
import CTASection from '../../components/Pages/HomePage/CTASection'
import { Navigate, useParams } from 'react-router-dom'
import { solutionPageList } from '../../components/Data/solutions/SolutionPageList'

function SingleSolutionPage() {
  const { solutions } = useParams();
  const solutionPageData = solutionPageList.find(url => url.url === solutions)
   console.log(solutionPageData,"hello")
    if (!solutionPageData) return <Navigate to="/404" replace />
 
  return (
<div className='bg-white flex flex-col font-lora !pt-10'>
<SingleSolutionBanner banner={solutionPageData.page.banner}/>
{/* <StateCard state={solutionPageData.page.state}/> */}
<SolutionDetailsCard detail={solutionPageData.page.detailSection}/>
<PlatformCapabilitiesSection plateform={solutionPageData.page.platformCapabilities}/>
<CTASection
title={"Upscale Your Hiring to the Next Level"}
description={"Transform your workforce planning and analytics using AI-driven intelligence."}
ctaText={"Request Your Personalized Demo"}
ctaUrl={"/schedule-demo"}
/>
<HowThisWorkSection howwork={solutionPageData.page.howWork}/>
<CTASection
title={solutionPageData.page.cta.ctafirst.title}
description={solutionPageData.page.cta.ctafirst.description}
ctaText={solutionPageData.page.cta.ctafirst.urlText}
ctaUrl={solutionPageData.page.cta.ctafirst.url}
/>
</div>
  )
}

export default SingleSolutionPage