import axios from "axios";

import { getAccessToken } from "@/util/prismic.helper"

import bg from "@/public/bg_blue.webp"

import Layout from "@/components/Layout/Layout"
import Events from "@/components/Events/Events"

export default function EventsPage({ offStageEventsData,  onStageIndividualEventsData, onStageGroupEventsData}) {

  return (
    <div className="relative pb-20" style={{
        backgroundImage: 'url('+bg.src+')',
        backgroundRepeat: 'repeat-y'
      }}>

      <div className="flex flex-col space-y-4 relative z-10 pt-20">
        <Events heading='OFF STAGE' data={offStageEventsData} route={'off-stage'}/>
        <Events heading='ON STAGE' subheading='Individual' data={onStageIndividualEventsData} route={'on-stage/individual'}/>
        <Events heading='ON STAGE' subheading='Group' data={onStageGroupEventsData} route={'on-stage/group'}/>
      </div>

    </div>
  )
}

EventsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {

  const ref = await getAccessToken()

  const offStage = `[at(document.type, "off_stage_events")]`
  const offStageEventsData =  await axios.get(`https://thouryathrikam.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[${offStage}]`)

  const onStageIndiviual = `[at(document.type, "on_stage_events")]`
  const onStageIndividualEventsData =  await axios.get(`https://thouryathrikam.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[${onStageIndiviual}]`)

  const onStageGroup = `[at(document.type, "on_stage_events_group")]`
  const onStageGroupEventsData =  await axios.get(`https://thouryathrikam.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[${onStageGroup}]`)

  return {
    props: {
      offStageEventsData: offStageEventsData?.data?.results[0]?.data?.events.map(
        (item) => item.text).filter((item)=> (item !== 'Select The Events')),
      onStageIndividualEventsData: onStageIndividualEventsData?.data?.results[0]?.data?.events.map(
        (item) => item.text).filter((item)=> (item !== 'Select The Events')),
      onStageGroupEventsData: onStageGroupEventsData?.data?.results[0]?.data?.events.map(
        (item) => item.text).filter((item)=> (item !== 'Select The Events')),
    },
  }
}
