import { type } from "os";
import client from "./index";

export const getBlog = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: "blog",
    "fields.slug": props,
    select:
      "fields.slug, fields.title, fields.description, fields.content" as any,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
      description: item.fields.description,
      content: item.fields.content,
    },
  }));

  return { data, fallback: false };
};

export const getPage = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: "page",
    "fields.slug": props,
    select:
      "fields.slug, fields.title, fields.description, fields.content" as any,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
      description: item.fields.description,
      content: item.fields.content,
    },
  }));

  return { data, fallback: false };
};

export const getAbout = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: "about",
    "fields.slug": props,
    select:
      "fields.slug, fields.title, fields.description, fields.content" as any,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
      description: item.fields.description,
      content: item.fields.content,
    },
  }));

  return { data, fallback: false };
};

export const getOffer = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: "offer",
    "fields.slug": props,
    select:
      "fields.slug, fields.title, fields.description, fields.content" as any,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
      description: item.fields.description,
      content: item.fields.content,
    },
  }));

  return { data, fallback: false };
};

export const getSections = async () => {
  const res = await client.getEntries({
    content_type: "section",
    select: "fields.name, fields.title" as any,
  });

  const sections = res.items.map((item) => ({
    params: {
      name: item.fields.name,
      title: item.fields.title,
    },
  }));

  return { sections, fallback: false };
};

export const getSubpages = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: props,
    select: "fields.slug, fields.title" as any,
  });

  const subpages = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
    },
  }));

  return { subpages, fallback: false };
};

export const getOfferTypes = async () => {
  const res = await client.getEntries({
    content_type: "offertype",
    select: "fields.name, fields.title, fields.description" as any,
  });

  const offerTypes = res.items.map((item) => ({
    params: {
      name: item.fields.name,
      title: item.fields.title,
      description: item.fields.description,
    },
  }));

  return { offerTypes, fallback: false };
};

export const getIndexHead = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: "section",
    "fields.name": props,
    select: "fields.title" as any,
  });

  const headTitle = res.items.map((item) => ({
    params: {
      title: item.fields.title,
    },
  }));

  return { headTitle, fallback: false };
};

export const getOffers = async (props?: string): Promise<any> => {
  const queryOptions: {
    content_type: string;
    select: string;
    [key: string]: string | undefined;
  } = {
    content_type: "offer",
    select: "fields.slug, fields.cover, fields.title, fields.description",
  };

  if (props) {
    queryOptions["fields.type"] = props;
  }

  const res = await client.getEntries(queryOptions);

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      cover: item.fields.cover,
      title: item.fields.title,
      description: item.fields.description,
    },
  }));

  return { data, fallback: false };
};

export const getAllOffers = async (): Promise<any> => {
  const queryOptions: {
    content_type: string;
    select: string;
    [key: string]: string | undefined;
  } = {
    content_type: "offer",
    select: "fields.slug, fields.cover, fields.title, fields.description",
  };

  const res = await client.getEntries(queryOptions);

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      cover: item.fields.cover,
      title: item.fields.title,
      description: item.fields.description,
    },
  }));

  return { data, fallback: false };
};

export const getHero = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: "section",
    "fields.name": props,
    select: "fields.pretitle, fields.heading, fields.description" as any,
  });

  const hero = res.items.map((item) => ({
    params: {
      pretitle: item.fields.pretitle,
      heading: item.fields.heading,
      description: item.fields.description,
    },
  }));

  return { hero, fallback: false };
};

export const getBlogs = async () => {
  const res = await client.getEntries({
    content_type: "blog",
    select:
      "fields.slug, fields.cover, fields.author, fields.title, fields.description, fields.tags" as any,
    limit: 100,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      cover: item.fields.cover,
      author: item.fields.author,
      title: item.fields.title,
      description: item.fields.description,
      tags: item.fields.tags,
    },
  }));

  return { data, fallback: false };
};

export const getAboutPages = async () => {
  const res = await client.getEntries({
    content_type: "about",
    select: "fields.slug, fields.title" as any,
    limit: 4,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
    },
  }));

  return { data, fallback: false };
};

export const getOfferPages = async () => {
  const res = await client.getEntries({
    content_type: "offer",
    select: "fields.slug, fields.title" as any,
    limit: 100,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
      title: item.fields.title,
    },
  }));

  return { data, fallback: false };
};

export const getPaths = async (props: string): Promise<any> => {
  const res = await client.getEntries({
    content_type: props,
    select: "fields.slug" as any,
  });

  const data = res.items.map((item) => ({
    params: {
      slug: item.fields.slug,
    },
  }));

  return { data, fallback: false };
};
