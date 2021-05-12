-- Add sub categories
INSERT INTO sub_categories (category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (2, 'ec2amitypes', 'AMI Types (EBS vs. Instance Store)', 'ec2'),
    (2, 'ec2enienaefa', 'ENI vs. ENA vs. EFA', 'ec2'),
    (2, 'ec2encrootvol', 'Encrypted Root Device Volumes and Snapshots', 'ec2'),
    (2, 'ec2spot', 'Spot Instances and Spot Fleets', 'ec2'),
    (2, 'ec2hibernate', 'EC2 Hibernate', 'ec2');


-- Add summaries
INSERT INTO summaries (summary)
VALUES
    ('# AMI Types (EBS vs. Instance Store)
You can filter AMIs based on:
- Region
- OS
- Architecture
- Launch Permissions
- Storage for the root device (where the OS lives)
  - Instance store:
    - Ephemeral storage
    - Resides on the instance and created from a template stored in S3
    - Not persistent (you can only reboot or terminate)
  - EBS backed volumes:
    - Root device is created from an EBS snapshot
    - Data is persistent - you can stop and start without loosing data.'),

    ('# ENI vs. ENA vs. EFA
## ENI: Elastic Network Interface
- 1 primary private IPv4 + 1 or more secondary private IPv4 addresses from the VPC range
- You are have:
    - 1 EIP per private IP address
    - 1 or more IPv6 addresses
    - 1 or more security groups
    - 1 MAC addresses
    - Source/Destination check flag
### Use cases for ENIs
- Management network for non-prod traffic
- For network and security appliances within the VPC
- Dual-homed instances which work across different subnets

## EN: Enhanced Networking
- Single root I/O virtualisation (SR-IOV) for high performance networking capabilities.
- SR-IOV is a method of device virtualisation which provides higher I/O performance and lower CPU utilisation.
- Higher bandwidth, higher packets per second (PPS) and lower inter-instance latencies.
- No additional charge.
- It can be enabled using:
    - **Elastic Network Adapter (ENA)**: supports up to 100 Gbps
    - Intel 82599 **Virtual Function (VF)**: supports up to 10 Gbps (typically used on old instances)

### Use cases for EN
- When you need good network performance (reliable and high throughput). This would be a better option to use than using multiple ENIs for example.

## EFA: Elastic Fabric Adapter
- A network device for EC2 instances for High Performance Computing (HPC) and Machine Learning (ML)
- Provides lower, consistent latency and higher throughput than TCP
- Can use OS-bypass, which allows HPC/ML applications to bypass the OS kernal and communicate directly with the EFA device.
- Only supported on Linux'),

    ('# Encrypted Root Device Volumes and Snapshots
- Snapshots of encryped volumes are encrypted automatically
- Volumes restored from encryped snapshots are encrypted automatically
- You can only share unencryped snapshots. They can be shared with other AWS accounts or made public
- You can create root device on EC2 creation
- If you need to encrypt a root device which is unencrpyted, you need to take a snapshot of it, then copy it - selecting the `encrypt` checkbox - then create a new EC2 instance using the newly copied snapshot.'),

    ('# Spot Instances and Spot Fleets
- Spot instances are unused EC2 capacity which are discounted up to 90% (compared with on-demand prices)
- Cost effective for fault tolerent workloads, big data processing, containerised workloads, CI/CD, HPC, test/dev workloads.
- You select a maximum **Spot Price** you wish to pay for an instance. The spot price will fluctuate but as long as your max is above the current spot price, your instance will stay online.
- The spot price varies depending on capacity in the region
- If the spot price increases above your max, you have 2 minutes to choose either stopping or terminating the instance.
    - You can use a **Spot Block** to prevent your instance from getting terminated if the spot price exceeds your max. You can set the Spot Block time between **1 and 6 hours**.
- You can use Spot pricing history to gauge the previous spot prices for an instance type.

## Shouldn''t be used for
- Persistent workloads
- Databases
- Critical jobs

## Spot Lifecycle
### Spot Request States
![image](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/spot_request_states.png) 

### Spot Lifecycle
![image](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/spot_lifecycle.png)

**Note:**
- `One-time` means when the spot price goes above your max, it''ll close the spot request altogether
- `Persistent` means when the spot price goes above your max, it''ll stop the instance but keep the spot request open. When the spot price drops below the max, it''ll start that instance back up again.

## Spot Fleets
A **spot fleet** attempts to launch a number of spot instances and on-demand instance to meet a target capacity. It works in a similar way to a spot request except aims to achieve a target capacity of instances.

- Launch pools to define EC2 instance type | OS | Availability Zone
- Multiple launch pools and the fleet will decide which one to use depending on a defined strategy (see below)
- Spot instances will stop launching instances once the target capicity is met

### Strategies
- Capacity Optimised: Instances come from the pool with optimal capacity for the number of instances about to launch
- Diversified: Distributed across all pools
- Lowest Price (default): Instances come from the cheapest pool
- Instance Pools to Use Count: Distributed across all pools but uses the lowest price across them. '),

    ('# EC2 Hibernate
When an instance is stopped, data on an EBS volume is kept. If an instance is terminated, then data on the root device volume will be lost.

When an instance starts up, the OS boots up, then user data scripts are run (bootstraping) and finally the applications start. This final stage can tage some time which is where hibernation comes in.

Hibernation (suspend-to-disk) is when the OS saves instance RAM to the EBS root volume. This makes starting an instance using this root volume, much faster.

An EC2 instance starting from hibernation: EBS root volume is restored, RAM contents are reloaded, previously running processes are resumed, previously attached volumes are reattached **and the instance retains it''s instance ID**:

![image](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/hibernation-flow.png)


- Need to ensure that there is enough space on the root device to hold the contents of the RAM
- Instance RAM must be less than 150GB
- Available for Windows, Amazon Linux 2 AMI and Ubuntu
- Can''t be hibernated for more than 60 days
- Available for **On-Demand** and **Reserved** instances');
