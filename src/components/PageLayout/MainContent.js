import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

const MainContent = ({childProps}) => {
  return (
    <div>
      <div className="app-content content container-fluid">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-xs-12 mb-1">
              <h2 className="content-header-title">Dark Layout</h2>
            </div>
            <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
              <div className="breadcrumb-wrapper col-xs-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item"><a href="#">Page Layouts</a>
                  </li>
                  <li className="breadcrumb-item active">Dark Layout
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="description" className="card">
              <div className="card-header">
                <h4 className="card-title">Description</h4>
              </div>
              <div className="card-body collapse in">
                <div className="card-block">
                  <div className="card-text">
                    <IndexLink to="/">Home</IndexLink>
                    {' | '}
                    <Link to="/fuel-savings">Demo App</Link>
                    {' | '}
                    <Link to="/about">About</Link>
                    <br/>
                    {childProps}
                  </div>
                </div>
              </div>
            </section>
            <section id="css-classNamees" className="card">
              <div className="card-header">
                <h4 className="card-title">CSS classNamees</h4>
              </div>
              <div className="card-body collapse in">
                <div className="card-block">
                  <div className="card-text">
                    <p>This table contains all classNamees related to the dark layout. This is a custom layout classNamees for dark layout page requirements.</p>
                    <p>All these options can be set via following classNamees:</p>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                        <tr>
                          <th>classNamees</th>
                          <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <th scope="row"><code>.navbar-dark</code></th>
                          <td>To set navbar dark color you need to add <code>.navbar-dark</code> className in navbar <code>&lt;nav&gt;</code> tag. Refer HTML markup line no 7.</td>
                        </tr>
                        <tr>
                          <th scope="row"><code>.menu-dark</code></th>
                          <td>To set the main navigation dark color on page <code>.menu-dark</code> className needs to add in navigation wrapper. Refer HTML markup line no 12.</td>
                        </tr>
                        <tr>
                          <th scope="row"><code>.footer-dark</code></th>
                          <td>To set the main footer dark color on page <code>.footer-dark</code> className needs to add in footer wrapper. Refer HTML markup line no 37.</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="html-markup" className="card">
              <div className="card-header">
                <h4 className="card-title">HTML Markup</h4>
                <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li><a data-action="collapse"><i className="icon-minus4"></i></a></li>
                    <li><a data-action="reload"><i className="icon-reload"></i></a></li>
                    <li><a data-action="close"><i className="icon-cross2"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="card-body collapse in">
                <div className="card-block">
                  <div className="card-text">
                    <p>This section contains HTML Markup to create dark layout. This markup define where to add css classNamees to make navbar, navigation & footer dark.</p>
                    <ul>
                      <li><span className="text-bold-600">Line no 7:</span> Contain the <code>.navbar-dark</code> className for adjusting navbar color dark.</li>
                      <li><span className="text-bold-600">Line no 12:</span> Contain the <code>.menu-dark</code> className for adjusting main navigation color dark.</li>
                      <li><span className="text-bold-600">Line no 37:</span> Contain the <code>.footer-dark</code> className for adjusting footer color dark.</li>
                    </ul>
                    <p>Robust has a ready to use starter kit, you can use this layout directly by using the starter kit pages from the <code>robust-admin/starter-kit</code> folder.</p>
                    <pre data-line="7, 12, 37" className="language-markup">
                  <code className="language-markup">
                      &lt;!DOCTYPE html&gt;
                    &lt;html lang="en"&gt;
                    &lt;head&gt;&lt;/head&gt;
                    &lt;body data-menu="vertical-menu" className="vertical-layout vertical-menu 2-column menu-expanded"&gt;

                    &lt;!-- navbar-fixed-top--&gt;
                    &lt;nav role="navigation" className="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-dark navbar-shadow navbar-border"&gt;
                    ...
                    &lt;/nav&gt;

                    &lt;!-- BEGIN Navigation--&gt;
                    &lt;div className="main-menu menu-dark menu-fixed menu-shadow"&gt;
                    ...
                    &lt;/div&gt;
                    &lt;!-- END Navigation--&gt;

                    &lt;!-- BEGIN Content--&gt;
                    &lt;div className="content app-content container-fluid"&gt;
                    &lt;div className="content-wrapper"&gt;
                    &lt;!-- content header--&gt;
                    &lt;div className="content-header row"&gt;
                    ...
                    &lt;/div&gt;
                    &lt;!-- content header--&gt;

                    &lt;!-- content right--&gt;
                    &lt;div className="content-right"&gt;
                    ...
                    &lt;/div&gt;
                    &lt;!-- content right--&gt;

                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;!-- END Content--&gt;

                    &lt;!-- START FOOTER DARK--&gt;
                    &lt;footer className="footer footer-dark footer-fixed"&gt;
                    ...
                    &lt;/footer&gt;
                    &lt;!-- START FOOTER DARK--&gt;

                    &lt;/body&gt;
                    &lt;/html&gt;
                  </code>
                </pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.element
};

export default MainContent;
