import { getFiles, getFilesByRoute } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import components from "../../components/MdxComponents/index";

function Note_Page({ source, frontmatter,mdxSource }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 w-full">
      <div className="max-w-screen-md px-4 md:px-8 mx-auto p-14 flex flex-col gap-8">
        <MDXRemote
          {...source}
          components={components}
        />
      </div>
    </div>
  );
}

export default Note_Page;

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFilesByRoute(params.note_id);
  const mdxSource = await serialize(source);

  return {
    props: {
      source,
      frontmatter,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const notes = await getFiles();
  const paths = notes.map((post) => {
    return {
      params: {
        note_id: post.replace(/\.mdx/, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
