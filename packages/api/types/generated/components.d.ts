import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralHeading extends Struct.ComponentSchema {
  collectionName: 'components_general_headings';
  info: {
    displayName: 'Heading';
    icon: 'bulletList';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GeneralImage extends Struct.ComponentSchema {
  collectionName: 'components_general_image';
  info: {
    displayName: 'Image';
    icon: 'heart';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SiteMeta extends Struct.ComponentSchema {
  collectionName: 'components_site_meta';
  info: {
    displayName: 'Site meta';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SiteNavigation extends Struct.ComponentSchema {
  collectionName: 'components_site_navigation';
  info: {
    displayName: 'Site navigation';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

export interface SiteSocials extends Struct.ComponentSchema {
  collectionName: 'components_general_socials';
  info: {
    displayName: 'Social profile';
    icon: 'link';
  };
  attributes: {
    name: Schema.Attribute.String;
    username: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.heading': GeneralHeading;
      'general.image': GeneralImage;
      'site.meta': SiteMeta;
      'site.navigation': SiteNavigation;
      'site.socials': SiteSocials;
    }
  }
}
