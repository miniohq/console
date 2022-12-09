// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";

import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import LoginIcon from "@mui/icons-material/Login";
import {
  formFieldStyles,
  modalBasic,
} from "../Common/FormComponents/common/styleLibrary";
import { IAM_PAGES } from "../../../common/SecureComponent/permissions";
import AddIDPConfiguration from "./AddIDPConfiguration";
import { ldapFormFields } from "./utils";
import AddIDPConfigurationHelpBox from "./AddIDPConfigurationHelpbox";

type AddIDPLDAPConfigurationProps = {
  classes?: any;
};

const styles = (theme: Theme) =>
  createStyles({
    ...formFieldStyles,
    formFieldRow: {
      ...formFieldStyles.formFieldRow,
    },
    ...modalBasic,
  });

const AddIDPLDAPConfiguration = ({ classes }: AddIDPLDAPConfigurationProps) => {
  const helpBoxContents = [
    {
      text: "MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",
      icon: <LoginIcon />,
      iconDescription: "Create Configurations",
    },
    {
      text: "MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",
      icon: null,
      iconDescription: "",
    },
    {
      text: "MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",
      icon: null,
      iconDescription: "",
    },
  ];

  return (
    <AddIDPConfiguration
      icon={<LoginIcon />}
      helpBox={
        <AddIDPConfigurationHelpBox
          helpText={"Learn more about LDAP Configurations"}
          contents={helpBoxContents}
          docLink={
            "https://min.io/docs/minio/linux/operations/external-iam.html?ref=con#minio-external-iam-ad-ldap"
          }
          docText={"Learn more about LDAP Configurations"}
        />
      }
      header={"LDAP Configurations"}
      backLink={IAM_PAGES.IDP_LDAP_CONFIGURATIONS}
      title={"Create LDAP Configuration"}
      endpoint={"/api/v1/idp/ldap/"}
      formFields={ldapFormFields}
    />
  );
};

export default withStyles(styles)(AddIDPLDAPConfiguration);
