// import React from "react";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { getAllFiles, getFilesByRoute } from "../../lib/mdx";
import components from "../../components/MdxComponents/index";

function Notes({ source, frontmatter }) {
  const router = useRouter();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 w-full">
      <div className="max-w-screen-md px-4 md:px-8 mx-auto p-14 flex flex-col gap-8">
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
}

export default Notes;

export async function getStaticProps(context) {
  const data = context.params.note_id;
  const { source, frontmatter } = await getFilesByRoute(data[1], data[0]);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  const { data, numberFilesByTheme } = await getAllFiles();

  data.map((data) => {
    paths.push({
      params: {
        note_id: [data.folder, data.file],
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}
