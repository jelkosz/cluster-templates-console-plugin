import { K8sGroupVersionKind } from '@openshift-console/dynamic-plugin-sdk';
export const TEMPLATES_HELM_REPO_LABEL = 'clustertemplates.openshift.io/helm-repo';

export const clusterTemplateVersion = 'v1alpha1';
export const clusterTemplateGroup = 'clustertemplate.openshift.io';

export const helmRepoGVK: K8sGroupVersionKind = {
  kind: 'HelmChartRepository',
  version: 'v1beta1',
  group: 'helm.openshift.io',
};

export const clusterTemplateGVK: K8sGroupVersionKind = {
  kind: 'ClusterTemplate',
  version: clusterTemplateVersion,
  group: 'clustertemplate.openshift.io',
};

export const clusterTemplateQuotaGVK: K8sGroupVersionKind = {
  kind: 'ClusterTemplateQuota',
  version: clusterTemplateVersion,
  group: clusterTemplateGroup,
};

export const clusterTemplateInstanceGVK: K8sGroupVersionKind = {
  kind: 'ClusterTemplateInstance',
  version: clusterTemplateVersion,
  group: 'clustertemplate.openshift.io',
};

export const pipelineGVK: K8sGroupVersionKind = {
  group: 'tekton.dev',
  version: 'v1beta1',
  kind: 'Pipeline',
};

export const roleBindingGVK: K8sGroupVersionKind = {
  group: 'rbac.authorization.k8s.io',
  kind: 'RoleBinding',
  version: 'v1',
};

export const namespaceGVK: K8sGroupVersionKind = {
  kind: 'Namespace',
  version: 'v1',
};

export const secretGVK: K8sGroupVersionKind = {
  version: 'v1',
  kind: 'Secret',
};

export const configMapGVK: K8sGroupVersionKind = {
  version: 'v1',
  kind: 'ConfigMap',
};
