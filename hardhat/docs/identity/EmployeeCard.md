# EmployeeCard

*Bertrand Presles*

> An SBT for professionnal decentralized identity and proof of experience.

You can use this contract to generate digital ids for your employees that can also be used as proof of their work in your company



## Methods

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*See {IERC721-approve}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*See {IERC721-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### burnAuth

```solidity
function burnAuth(uint256 tokenId) external view returns (enum IERC5484.BurnAuth)
```

Gets the burn authorization information for this token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | The token Id. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | enum IERC5484.BurnAuth | BurnAuth The burn policy for the token. |

### burnCard

```solidity
function burnCard(address employee) external nonpayable
```

Burns a card.



#### Parameters

| Name | Type | Description |
|---|---|---|
| employee | address | Current holder of the card. |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*See {IERC721-getApproved}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getEmployeeCardId

```solidity
function getEmployeeCardId(address employee) external view returns (uint256)
```

Gets the employee card id.



#### Parameters

| Name | Type | Description |
|---|---|---|
| employee | address | Employee address. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The employee card id. |

### invalidateEmployeeCard

```solidity
function invalidateEmployeeCard(uint256 tokenId, uint256 endTime) external nonpayable
```

Invalidates an SBT token.

*Saves the end date (in unix timestamp format) in _tokenEndTimes mapping.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | The token id to invalidate. |
| endTime | uint256 | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*See {IERC721-isApprovedForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenValid

```solidity
function isTokenValid(uint256 tokenId) external view returns (bool)
```

Returns if the SBT is still valid.

*A valid token is a token without end time set*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | True is it&#39;s still valid, false otherwise. |

### mint

```solidity
function mint(address _recipient, string _tokenURI) external nonpayable
```

Mint a new employee card Consensual SBT token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | Recipient address. |
| _tokenURI | string | The token URI. emit EmployeeCardMinted event when card is minted. |

### name

```solidity
function name() external view returns (string)
```



*See {IERC721Metadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*See {IERC721-ownerOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC721-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IERC721Metadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenByIndex

```solidity
function tokenByIndex(uint256 index) external view returns (uint256)
```



*See {IERC721Enumerable-tokenByIndex}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)
```



*See {IERC721Enumerable-tokenOfOwnerByIndex}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```

Gets the token URI for the passed token id.

*Returns an URI for a given token ID. Revert if the token ID does not exist. May return an empty string.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | uint256 ID of the token to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | The token URI  |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC721Enumerable-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-transferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### CallReceived

```solidity
event CallReceived(address sender, uint256 amount, bytes data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender  | address | undefined |
| amount  | uint256 | undefined |
| data  | bytes | undefined |

### EmployeeCardEnded

```solidity
event EmployeeCardEnded(uint256 tokenId, uint256 endTime)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId  | uint256 | undefined |
| endTime  | uint256 | undefined |

### EmployeeCardMinted

```solidity
event EmployeeCardMinted(address employee, uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| employee  | address | undefined |
| tokenId  | uint256 | undefined |

### Issued

```solidity
event Issued(address indexed from, address indexed to, uint256 indexed tokenId, enum IERC5484.BurnAuth burnAuth)
```

Emitted when a soulbound token is issued.



#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |
| burnAuth  | enum IERC5484.BurnAuth | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TokenReceived

```solidity
event TokenReceived(address sender, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender  | address | undefined |
| amount  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### VacationRightsCalculated

```solidity
event VacationRightsCalculated(address employee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| employee  | address | undefined |



