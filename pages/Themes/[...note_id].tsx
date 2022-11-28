import type { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownJSX } from "../../lib/mdx";
import components from "../../components/MdxComponents/index";
import {
  stringToArray,
  colorRandom,
  validationValues,
  convertDate,
} from "../../utils/index";
import background from "../../assets/img/img-test.jpg";

function Notes({ source, frontmatter }: any) {
  const router = useRouter();

  const { date, tags } = validationValues(frontmatter);
  const newDate = convertDate(date);
  const ArrayTags = stringToArray(tags);

  return (
    <div className="NOTE">
      <div className="container-note">
        <div className="container-metadata">
          <div className="container-tags">
            {ArrayTags.map((tag) => {
              let color = colorRandom();
              return <h3 className={`tag ${color}`}>{tag}</h3>;
            })}
          </div>
          <h3 className="date">{newDate}</h3>
        </div>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
}

export default Notes;

export const getStaticPaths = () => {
  const paths: Object[] = [];
  const mdx = new MarkdownJSX();
  const { data, numberFilesByTheme } = mdx.GetAllFiles();

  data.map((data: any) => {
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
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const mdx = new MarkdownJSX();
  const data = context.params.note_id;
  const { source, frontmatter } = await mdx.GetFileByRoute(data[1], data[0]);

  return {
    props: {
      source,
      frontmatter,
    },
  };
};
