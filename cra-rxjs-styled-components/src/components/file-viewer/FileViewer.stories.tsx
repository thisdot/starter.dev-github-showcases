import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import FileViewer from './FileViewer.view';

export default {
  title: 'Navbar/FileViewer',
  component: FileViewer,
} as ComponentMeta<typeof FileViewer>;

const Template: ComponentStory<typeof FileViewer> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<FileViewer {...args} />}></Route>
    </Routes>
  </MemoryRouter>
);

export const JsxFile = Template.bind({});
JsxFile.args = {
  byteSize: 534,
  lines: 23,
  language: 'jsx',
  text: `import React from "react";

  class Card extends React.Component {
    render() {
      const profile = this.props;
      return (
        <div style={{ margin: "1rem" }}>
          <img
            style={{ height: 75, width: 75 }}
            src={profile.avatar_url}
            alt="github user profile"
          />
          <div style={{ display: "inline-block", marginLeft: 10 }}>
            <div style={{ fontSize: "125%" }}>{profile.name}</div>
            <div>{profile.company}</div>
          </div>
        </div>
      );
    }
  }

  export default Card;
  `,
};

export const TypescriptFile = Template.bind({});
TypescriptFile.args = {
  byteSize: 1775,
  lines: 64,
  language: 'typescript',
  text: `import { Request, Response } from "express";
  import {
    requestPasswordReset,
    resetPassword,
  } from "../services/resetPassword.service";
  import ResponseStatus from "../utils/response";
  import { validateUserPassword } from "../utils/passwordValidate";

  const response = new ResponseStatus();

  export const requestPasswordResetController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const resp = await requestPasswordReset(
        req.body.email.toLowerCase(),
        req.body.client_url
      );
      if (!resp) {
        response.setError(400, resp);
        return response.send(res);
      }
      response.setSuccess(200, "password reset request successful", { ...resp });
      return response.send(res);
    } catch (error) {
      response.setError(400, error.message);
      return response.send(res);
    }
  };

  export const resetPasswordController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { error } = validateUserPassword({ password: req.body.password });
      if (error) {
        response.setError(400, "Invalid password format");
        return response.send(res);
      }
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        const token = req.headers.authorization.split(" ")[1];
        const resp = await resetPassword(req.body.password, token);
        if (!resp) {
          response.setError(400, resp);
          return response.send(res);
        }
        response.setSuccess(200, resp, {
          status: "successful",
        });
        return response.send(res);
      }
      response.setError(400, "Not authorized.");
      return response.send(res);
    } catch (error) {
      response.setError(400, "password reset failed");
      return response.send(res);
    }
  };
  `,
};
