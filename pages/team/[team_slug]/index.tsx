import API from "@/helpers/api";
import Layout from "@/modules/@common/@layout";
import TeamDetail from "@/modules/team/team_detail";
const forntendUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const TeamDetailPage = ({ teamDetail }: any) => {
  return (
    <Layout
      title={teamDetail?.name}
      metaTitle={teamDetail?.name || ""}
      metaImage={teamDetail?.profileImage}
      metaUrl={`${forntendUrl}/team/${teamDetail?.slug}`}
    >
      <TeamDetail teamDetail={teamDetail} />
    </Layout>
  );
};

export default TeamDetailPage;

export async function getServerSideProps({ query }: any) {
  const { team_slug } = query;
  let props = {
    teamDetail: null,
  };

  try {
    const teamDetail: any = await API.get(`/public/team/${team_slug}`);
    if (!teamDetail.error && teamDetail.data) {
      props.teamDetail = teamDetail.data;
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        },
      };
    }
    return {
      props,
    };
  } catch (err) {
    return {
      props,
    };
  }
}
