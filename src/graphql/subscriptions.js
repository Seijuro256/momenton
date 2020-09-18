/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
