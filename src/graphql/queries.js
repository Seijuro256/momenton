/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      manager {
        id
        name
        employees {
          id
          name
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        manager {
          id
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
