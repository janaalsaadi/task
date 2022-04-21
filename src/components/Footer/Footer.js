import { Col, NavLink, Row } from "react-bootstrap";
import * as React from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
const FooterItemsMobile = [
  {
    title: "NAVIGATION",
    links: ["Home", "Books", "Reviwes", "News", "Contacts"],
  },
  {
    title: "CATEGORIES",
    links: [
      "Art","Biography","Business","Chick Lit","Children's","Christian","Classics","Comics","Contemporary",
      "Cookbooks","Crime","Ebooks","Fantasy",
      "Fiction","Gay And Lesbian", "Graphic Novels","Historical Fiction","History", "Horror","Humar And Comedy","Manga","memoir","Music",
    ],
  },

  {
    title: "FOLLOW US",
    links: ["Facebook", "Twitter", "RSS"],
  },
];
const FooterItems = [
  {
    title: "NAVIGATION",
    links: ["Home", "Books", "Reviwes", "News", "Contacts"],
  },
  {
    title: "CATEGORIES",
    links: [
      "Art","Biography","Business","Chick Lit","Children's","Christian","Classics","Comics",
    ],
  },
  {
    title: "     ",
    links: [
      "Contemporary","Cookbooks","Crime","Ebooks","Fantasy","Fiction","Gay And Lesbian","Graphic Novels",
    ],
  },
  {
    title: "     ",
    links: [
      "Historical Fiction","History","Horror","Humar And Comedy","Manga","memoir","Music",
    ],
  },
  {
    title: "FOLLOW US",
    links: ["Facebook", "Twitter", "RSS"],
  },
];

const Footer = () => {

  return (
    <footer>
      <Row className="footer-content container-lg">
        {FooterItems.map((item, index) => (
          <Col key={index}>
            {!item.title.trim() ? (
              <p className="empty-title"> </p>
            ) : (
              <strong className="title">{item.title}</strong>
            )}
            <div className="links-wrapper">
              {item.links.map((element) => (
                <NavLink> {element} </NavLink>
              ))}
            </div>
          </Col>
        ))}
      </Row>
      <Row className="tablet-footer-content container-lg">
        {FooterItemsMobile.map((item, index) => (
          <Accordion key={index}>
            {item.title && <AccordionSummary className="title" expandIcon={<ExpandMore />}>
              {item.title}
            </AccordionSummary>
            }
            <AccordionDetails>
              {item.links.map((element) => (
                <NavLink> {element} </NavLink>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Row>
    </footer>
  );
}

export default Footer;
