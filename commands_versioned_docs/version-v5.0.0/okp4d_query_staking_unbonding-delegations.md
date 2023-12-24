## okp4d query staking unbonding-delegations

Query all unbonding-delegations records for one delegator

### Synopsis

Query unbonding delegations for an individual delegator.

Example:
$ okp4d query staking unbonding-delegations okp41gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p

```
okp4d query staking unbonding-delegations [delegator-addr] [flags]
```

### Options

```
      --count-total        count total number of records in unbonding delegations to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for unbonding-delegations
      --limit uint         pagination limit of unbonding delegations to query for (default 100)
      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint        pagination offset of unbonding delegations to query for
  -o, --output string      Output format (text|json) (default "text")
      --page uint          pagination page of unbonding delegations to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of unbonding delegations to query for
      --reverse            results are sorted in descending order
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID (default "okp4d")
```

### SEE ALSO

* [okp4d query staking](okp4d_query_staking.md)	 - Querying commands for the staking module