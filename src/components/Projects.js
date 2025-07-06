import React from 'react';
import {gql, useQuery} from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';

const ProjectItem = styled.p`
  cursor: pointer;
`;

const PROJECTS_QUERY = gql`
  query Projects {
    projectCollection {
      items {
        sys {
          id
        }
        project
        slug
      }
    }
  }
`;

export default function Projects() {
    const {data, loading, error} = useQuery(PROJECTS_QUERY);
    console.log(data)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading projects</div>;

    return (
        <div>
            {data?.projectCollection?.items.map((project) => (
                <Link href={`/${project.slug}`} key={project.sys.id}>
                    <ProjectItem>
                        <p className="text-sm">{project.project}</p>
                    </ProjectItem>
                </Link>
            ))}
        </div>

    );
}