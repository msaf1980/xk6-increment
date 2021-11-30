// This is a PoC/illustrative code to show how to share a single integer that goes up in k6 on a
// single instance

package increment

import (
	"sync/atomic"

	"go.k6.io/k6/js/modules"
)

type Increment struct {
	v   uint64
	max uint64
}

func newIncrement(max int64) *Increment {
	return &Increment{max: uint64(max)}
}

func (c *Increment) Next() int64 {
	v := atomic.AddUint64(&c.v, 1) - 1
	return int64(v % c.max)
}

func init() {
	modules.Register("k6/x/increment", New())
}

type Module struct{}

func (m *Module) XIncrement(max int64) *Increment {
	return newIncrement(max)
}

func New() *Module {
	return &Module{}
}
