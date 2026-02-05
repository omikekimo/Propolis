# Nodes and Structure

## Node Types

### Full Nodes

While the items shown in the organisational diagram need not all exist in 
all instances of Propolis, they should all exist in the prime instance.

This is necessary because:
1. As the model example of the framework it is valuable to demonstrate the 
functional workings
2. There must be an extant node or sub-node of each type so that nested 
instances may utilise the previously described cascading functionalities

### Sub-Nodes

Sub-nodes are support teams that work to accommodate the main concerns 
within the department or satellite they serve.

**In the diagram:**
- Smaller sharp cornered rectangles detail sub-nodes
- These depend on a department to support them

### Primary Nodes

The following are considered primary nodes:
- Departments
- Satellites
- Committees that run the departments (represented as circles)
- Councils when they are sitting

### External Entities

External entities that require a level of interaction are shown as double 
outlined rectangles in the organisational diagram.

### Outcomes

The ellipses show the outcomes that will be produced by the departments and 
satellites. Their positions on the diagram are mapped to the area that will 
be most interested in them, and in most instances manage them.

---

## The Prime Instance

The focus of the specification continues in the description of the prime 
instance as it will be this that:

- Lays the groundwork for future instances
- Provides the cascading functionalities future child instances may wish to 
utilise

### Main Concerns

The main concerns of each department are outlined in rounded rectangular 
boxes and are appended with some of their properties.

---

## Network Architecture

### Decentralised Yet Consistent

The network should follow principles similar to computer networks:
- **Resilient** - Continue operating even if certain nodes or connections 
become inoperative
- **Distributed** - No single point of failure
- **Interoperable** - Nodes can communicate using standard protocols

### Cascading Functionality

The cascading economic networking structure allows:

1. **Resource Sharing** - Parent instances can provide services to child 
instances
2. **Economies of Scale** - Shared infrastructure reduces costs
3. **Flexibility** - Instances can connect, disconnect, or restructure as 
needed
4. **Growth** - New instances can bootstrap using existing infrastructure

### Example Network Structure

```
Prime Instance (Full)
├── Child Instance A (Minimal: HC&D + PE)
│   └── Uses parent's Credit Union
│   └── Uses parent's Education
├── Child Instance B (Partial: HC&D + PE + Education)
│   └── Uses parent's Credit Union
│   └── Provides own Education
└── Child Instance C (Full but nested)
    └── Complete independence but can call on parent resources
```

---

## Communication Pathways

### Internal Communication

Between departments and committees within a single instance:
- **Direct** - Department to department
- **Via councils** - For governance decisions
- **Via committees** - For operational coordination

### External Communication

Between different Propolis instances:
- **Via satellite proxies** - For business relationships
- **Via operational standards** - Using defined protocols
- **Direct member-to-member** - Where appropriate

### Emergency Communication

Red arrows in the organisational diagram indicate urgent communication 
pathways that bypass normal channels when necessary.

---

## Scalability

### Small to Large

The nodal structure allows Propolis to scale from:
- **Minimal** - 2 nodes, handful of members
- **Medium** - 4-6 nodes, dozens of members
- **Large** - All nodes, hundreds or thousands of members
- **Network** - Multiple interconnected instances

### Horizontal Scaling

Adding more instances at the same level:
- Geographic expansion
- Industry-specific instances
- Community-specific instances

### Vertical Scaling

Increasing capacity within an instance:
- More members per node
- More sub-nodes
- Enhanced services

The architecture supports both directions of growth while maintaining 
operational coherence.
