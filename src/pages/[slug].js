import {gql, useQuery} from '@apollo/client';
import Image from 'next/image';
import {Geist} from "next/font/google";
import Loading from '@/components/Loading';
import styled from 'styled-components';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const PROJECT_QUERY = gql`
  query Project($slug: String!) {
  projectCollection(where: { slug: $slug }, limit: 1) {
    items {
      project
      description {
        json
      }
      galleryCollection {
        items {
          url
          contentType
          __typename
        }
      }
    }
  }
}
`;

const ProjectWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

const ProjectImage = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    margin-bottom: 2rem;
`;

export default function Project({slug}) {
    const {data, loading, error} = useQuery(PROJECT_QUERY, {
        variables: {slug},
    });

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error.message}</p>;

    const project = data?.projectCollection?.items[0];
    if (!project) return <p>Project not found</p>;

    const imageUrl = project.galleryCollection?.items?.[0]?.url;

    console.log(project)

    return (
        <ProjectWrapper className={geistSans.className}>
            <h1 className="text-4xl mb-8">{project.project}</h1>
            {imageUrl && (
                <ProjectImage>
                    <Image
                        src={imageUrl}
                        alt="Gallery image"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </ProjectImage>
            )}
            <div className="prose dark:prose-invert">
                {documentToReactComponents(project.description.json)}
            </div>
        </ProjectWrapper>
    );
}

export async function getStaticProps({params}) {
    return {
        props: {
            slug: params.slug,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}